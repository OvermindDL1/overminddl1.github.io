# -*- coding: utf-8 -*-

# Copyright © 2017-2018 OvermindDL1.

# Permission is hereby granted, free of charge, to any
# person obtaining a copy of this software and associated
# documentation files (the "Software"), to deal in the
# Software without restriction, including without limitation
# the rights to use, copy, modify, merge, publish,
# distribute, sublicense, and/or sell copies of the
# Software, and to permit persons to whom the Software is
# furnished to do so, subject to the following conditions:
#
# The above copyright notice and this permission notice
# shall be included in all copies or substantial portions of
# the Software.
#
# THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY
# KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE
# WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR
# PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS
# OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR
# OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
# OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
# SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

"""Klipse directive for reStructuredText."""

from xml.sax.saxutils import escape

html_escape_table = {
    '"': "&quot;",
    "'": "&apos;"
}

from docutils import nodes
from docutils.parsers.rst import Directive, directives

from nikola.plugin_categories import RestExtension
from nikola.utils import req_missing


class Plugin(RestExtension):
    """Plugin for reST Klipse directive."""

    name = "rest_klipse"

    def generate_header_bit(self):
        """Generate HTML for the Klipse plugin."""
        # TODO:  don't use CDN so as to bake it into the site
        return '''
            <link rel="stylesheet" type="text/css" href="https://storage.googleapis.com/app.klipse.tech/css/codemirror.css">
        '''

    def generate_footer_bit(self):
        return '''
        <script>
            window.klipse_settings = {
                codemirror_options_in: {
                    lineWrapping: true,
                    autoCloseBrackets: true
                },
                codemirror_options_out: {
                    lineWrapping: true
                },
                beautify_strings: true,
                selector: '.language-klipse',
                selector_eval_js: '.language-klipse-eval-js',
                selector_jsx: '.language-klipse-jsx',
                selector_render_jsx: '.language-render-jsx',
                selector_es2017: '.language-es2017',
                selector_brainfuck: '.language-brainfuck',
                selector_transpile_jsx: '.language-transpile-jsx',
                selector_eval_php: '.language-klipse-eval-php',
                selector_eval_markdown: '.language-klipse-markdown',
                selector_eval_lambdaway: '.language-klipse-lambdaway',
                selector_eval_python_client: '.language-klipse-eval-python, .language-eval-python',
                selector_eval_html: '.language-klipse-html',
                selector_sql: '.language-klipse-sql',
                selector_eval_ruby: '.language-klipse-eval-ruby',
                selector_eval_scheme: '.language-klipse-scheme',
                selector_eval_cpp: '.language-klipse-eval-cpp',
                selector_google_charts: '.language-google-chart',
                selector_plot: '.language-plot',
                selector_oblivion: '.language-oblivion',
                selector_lua: '.language-klipse-lua',
                selector_js: '.language-klipse-js',
                selector_eval_ocaml: '.language-klipse-eval-ocaml',
                selector_transpile_ocaml: '.language-transpile-ocaml',
                selector_transpile_reason_3: '.language-transpile-reason',
                selector_transpile_reason_3_to_ocaml: '.language-transpile-reason-to-ocaml',
                selector_eval_reason_3: '.language-klipse-reason',
                selector_ocaml_to_reason: '.language-ocaml-to-reason',
                selector_reagent: '.language-reagent',
            };
        </script>
        <script src="https://storage.googleapis.com/app.klipse.tech/plugin_prod/js/klipse_plugin.min.js?v=7.2.4"></script>
        '''

    def set_site(self, site):
        """Set Nikola site."""
        self.site = site
        site.template_hooks['extra_head'].append(self.generate_header_bit, False)
        site.template_hooks['page_footer'].append(self.generate_footer_bit, False)
        directives.register_directive('klipse', Klipse)
        return super(Plugin, self).set_site(site)


klipse_html = '''
<pre class="{preclass}">
<code class="{codeclass}"{codeopts}>
{code}
</code>
</pre>
'''

class Klipse(Directive):
    """reST extension for inserting any sort of klipse snippet."""

    has_content = True
    required_arguments = 1
    optional_arguments = 3
    option_spec = {
        'hidden': directives.unchanged,
        'libs': directives.unchanged,
        'preamble': directives.unchanged,
        'loop': directives.unchanged,
        'gist': directives.unchanged,
    }

    def run(self):
        """Run klipse directive."""
        # TODO:  Sanitize things...
        preclass = "hidden" if 'hidden' in self.options else ""
        codeclass = "language-klipse-" + directives.uri(self.arguments[0])
        codeopts = ""
        codeopts += (' data-external-libs="' + escape(self.options['libs'], html_escape_table) + '"') if 'libs' in self.options else ""
        codeopts += (' data-preamble="' + escape(self.options['preamble'], html_escape_table) + '"') if 'preamble' in self.options else ""
        codeopts += (' data-loop-msec="' + escape(self.options['loop'], html_escape_table) + '"') if 'loop' in self.options else ""
        codeopts += (' data-gist-id="' + escape(self.options['gist'], html_escape_table) + '"') if 'gist' in self.options else ""
        code = escape("\n".join(self.content))
        html = klipse_html.format(
            preclass = preclass,
            codeclass = codeclass,
            codeopts = codeopts,
            code = code)
        node = nodes.raw('', html, format='html')
        return [node]

# def _gen_klipse_embed(lang, *q, **kw):
#     # if micawber is None:
#     #     msg = req_missing(['micawber'], 'use the media directive', optional=True)
#     #     return '<div class="text-error">{0}</div>'.format(msg)
#     # providers = micawber.bootstrap_basic()
#     # return micawber.parse_text(url, providers)
#     return '<span class="text-error">Not Yet Done: {0}</span>'.format(repr((lang, q, kw, self.content)))
