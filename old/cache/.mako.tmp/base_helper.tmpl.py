# -*- coding:utf-8 -*-
from mako import runtime, filters, cache
UNDEFINED = runtime.UNDEFINED
STOP_RENDERING = runtime.STOP_RENDERING
__M_dict_builtin = dict
__M_locals_builtin = locals
_magic_number = 10
_modified_time = 1470594604.2248228
_enable_loop = True
_template_filename = 'themes/overminddl1-mdl/templates/base_helper.tmpl'
_template_uri = 'base_helper.tmpl'
_source_encoding = 'utf-8'
_exports = ['late_load_js', 'html_feedlinks', 'html_headstart', 'html_stylesheets', 'html_translations']


def render_body(context,**pageargs):
    __M_caller = context.caller_stack._push_frame()
    try:
        __M_locals = __M_dict_builtin(pageargs=pageargs)
        __M_writer = context.writer()
        __M_writer('\n')
        __M_writer('\n\n')
        __M_writer('\n\n')
        __M_writer('\n\n')
        __M_writer('\n\n')
        __M_writer('\n')
        return ''
    finally:
        context.caller_stack._pop_frame()


def render_late_load_js(context):
    __M_caller = context.caller_stack._push_frame()
    try:
        image_plugin = context.get('image_plugin', UNDEFINED)
        mdl__version = context.get('mdl__version', UNDEFINED)
        social_buttons_code = context.get('social_buttons_code', UNDEFINED)
        colorbox_locales = context.get('colorbox_locales', UNDEFINED)
        lang = context.get('lang', UNDEFINED)
        __M_writer = context.writer()
        __M_writer('\n')
        if mdl__version:
            __M_writer('        <script src="//storage.googleapis.com/code.getmdl.io/')
            __M_writer(str(mdl__version))
            __M_writer('/material.min.js"></script>\n')
        else:
            __M_writer('        <script src="//storage.googleapis.com/code.getmdl.io/1.1.3/material.min.js"></script>\n')
        __M_writer('    <script src="//code.jquery.com/jquery-2.1.4.min.js"\n        type="text/javascript"></script>\n')
        if image_plugin and image_plugin == 'lightbox':
            __M_writer('        <script src="/assets/lightbox/js/lightbox.min.js"\n            type="text/javascript"></script>\n')
        if image_plugin and image_plugin == 'colorbox':
            __M_writer('        <script src="/assets/colorbox/js/jquery.colorbox-min.js"\n            type="text/javascript"></script>\n')
            if colorbox_locales[lang]:
                __M_writer('            <script src="/assets/colorbox/js/colorbox-i18n/jquery.colorbox-')
                __M_writer(str(colorbox_locales[lang]))
                __M_writer('.js">\n            </script>\n')
        __M_writer('    ')
        __M_writer(str(social_buttons_code))
        __M_writer('\n')
        return ''
    finally:
        context.caller_stack._pop_frame()


def render_html_feedlinks(context):
    __M_caller = context.caller_stack._push_frame()
    try:
        sorted = context.get('sorted', UNDEFINED)
        len = context.get('len', UNDEFINED)
        translations = context.get('translations', UNDEFINED)
        rss_link = context.get('rss_link', UNDEFINED)
        _link = context.get('_link', UNDEFINED)
        generate_rss = context.get('generate_rss', UNDEFINED)
        generate_atom = context.get('generate_atom', UNDEFINED)
        __M_writer = context.writer()
        __M_writer('\n')
        if rss_link:
            __M_writer('        ')
            __M_writer(str(rss_link))
            __M_writer('\n')
        elif generate_rss:
            if len(translations) > 1:
                for language in sorted(translations):
                    __M_writer('                <link rel="alternate" type="application/rss+xml" title="RSS (')
                    __M_writer(str(language))
                    __M_writer(')" href="')
                    __M_writer(str(_link('rss', None, language)))
                    __M_writer('">\n')
            else:
                __M_writer('            <link rel="alternate" type="application/rss+xml" title="RSS" href="')
                __M_writer(str(_link('rss', None)))
                __M_writer('">\n')
        if generate_atom:
            if len(translations) > 1:
                for language in sorted(translations):
                    __M_writer('                <link rel="alternate" type="application/atom+xml" title="Atom (')
                    __M_writer(str(language))
                    __M_writer(')" href="')
                    __M_writer(str(_link('index_atom', None, language)))
                    __M_writer('">\n')
            else:
                __M_writer('            <link rel="alternate" type="application/atom+xml" title="Atom" href="')
                __M_writer(str(_link('index_atom', None)))
                __M_writer('">\n')
        return ''
    finally:
        context.caller_stack._pop_frame()


def render_html_headstart(context):
    __M_caller = context.caller_stack._push_frame()
    try:
        use_open_graph = context.get('use_open_graph', UNDEFINED)
        mdl__roboto_font = context.get('mdl__roboto_font', UNDEFINED)
        description = context.get('description', UNDEFINED)
        extra_head_data = context.get('extra_head_data', UNDEFINED)
        is_rtl = context.get('is_rtl', UNDEFINED)
        abs_link = context.get('abs_link', UNDEFINED)
        mathjax_config = context.get('mathjax_config', UNDEFINED)
        title = context.get('title', UNDEFINED)
        use_base_tag = context.get('use_base_tag', UNDEFINED)
        twitter_card = context.get('twitter_card', UNDEFINED)
        lang = context.get('lang', UNDEFINED)
        nextlink = context.get('nextlink', UNDEFINED)
        def html_feedlinks():
            return render_html_feedlinks(context)
        prevlink = context.get('prevlink', UNDEFINED)
        comment_system_id = context.get('comment_system_id', UNDEFINED)
        def html_stylesheets():
            return render_html_stylesheets(context)
        comment_system = context.get('comment_system', UNDEFINED)
        permalink = context.get('permalink', UNDEFINED)
        favicons = context.get('favicons', UNDEFINED)
        blog_title = context.get('blog_title', UNDEFINED)
        __M_writer = context.writer()
        __M_writer('\n<!DOCTYPE html>\n<html ')
        __M_writer("prefix='")
        if use_open_graph or (twitter_card and twitter_card['use_twitter_cards']):
            __M_writer('og: http://ogp.me/ns# article: http://ogp.me/ns/article# ')
        if comment_system == 'facebook':
            __M_writer('fb: http://ogp.me/ns/fb#\n')
        __M_writer("' ")
        if use_open_graph or (twitter_card and twitter_card['use_twitter_cards']):
            __M_writer('vocab="http://ogp.me/ns" ')
        if is_rtl:
            __M_writer('dir="rtl" ')
        __M_writer('lang="')
        __M_writer(str(lang))
        __M_writer('">\n<head>\n    <meta charset="utf-8">\n')
        if use_base_tag:
            __M_writer('    <base href="')
            __M_writer(str(abs_link(permalink)))
            __M_writer('">\n')
        __M_writer('    <meta http-equiv="X-UA-Compatible" content="IE=edge">\n')
        if description:
            __M_writer('    <meta name="description" content="')
            __M_writer(filters.html_escape(str(description)))
            __M_writer('">\n')
        __M_writer('    <meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=1.0">\n')
        if title == blog_title:
            __M_writer('        <title>')
            __M_writer(filters.html_escape(str(blog_title)))
            __M_writer('</title>\n')
        else:
            __M_writer('        <title>')
            __M_writer(filters.html_escape(str(title)))
            __M_writer(' | ')
            __M_writer(filters.html_escape(str(blog_title)))
            __M_writer('</title>\n')
        __M_writer('\n')
        if mdl__roboto_font:
            __M_writer('        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:regular,bold,italic,thin,light,bolditalic,black,medium&lang=en" type="text/css">\n')
        __M_writer('    ')
        __M_writer(str(html_stylesheets()))
        __M_writer('\n    <link rel="stylesheet" href="//fonts.googleapis.com/icon?family=Material+Icons">\n\n    ')
        __M_writer(str(html_feedlinks()))
        __M_writer('\n    <link rel="canonical" href="')
        __M_writer(str(abs_link(permalink)))
        __M_writer('">\n\n')
        if favicons:
            for name, file, size in favicons:
                __M_writer('            <link rel="')
                __M_writer(str(name))
                __M_writer('" href="')
                __M_writer(str(file))
                __M_writer('" sizes="')
                __M_writer(str(size))
                __M_writer('"/>\n')
        __M_writer('\n')
        if comment_system == 'facebook':
            __M_writer('        <meta property="fb:app_id" content="')
            __M_writer(str(comment_system_id))
            __M_writer('">\n')
        __M_writer('\n')
        if prevlink:
            __M_writer('        <link rel="prev" href="')
            __M_writer(str(prevlink))
            __M_writer('" type="text/html">\n')
        if nextlink:
            __M_writer('        <link rel="next" href="')
            __M_writer(str(nextlink))
            __M_writer('" type="text/html">\n')
        __M_writer('\n    ')
        __M_writer(str(mathjax_config))
        __M_writer('\n    ')
        __M_writer(str(extra_head_data))
        __M_writer('\n')
        return ''
    finally:
        context.caller_stack._pop_frame()


def render_html_stylesheets(context):
    __M_caller = context.caller_stack._push_frame()
    try:
        image_plugin = context.get('image_plugin', UNDEFINED)
        has_custom_css = context.get('has_custom_css', UNDEFINED)
        needs_ipython_css = context.get('needs_ipython_css', UNDEFINED)
        use_cdn = context.get('use_cdn', UNDEFINED)
        mdl__version = context.get('mdl__version', UNDEFINED)
        use_bundles = context.get('use_bundles', UNDEFINED)
        mdl__color_scheme = context.get('mdl__color_scheme', UNDEFINED)
        __M_writer = context.writer()
        __M_writer('\n')
        if mdl__version:
            if mdl__color_scheme:
                __M_writer('            <link rel="stylesheet" href="//storage.googleapis.com/code.getmdl.io/')
                __M_writer(str(mdl__version))
                __M_writer('/material.')
                __M_writer(str(mdl__color_scheme))
                __M_writer('.min.css">\n')
            else:
                __M_writer('            <link rel="stylesheet" href="//storage.googleapis.com/code.getmdl.io/')
                __M_writer(str(mdl__version))
                __M_writer('/material.indigo-pink.min.css">\n')
        else:
            if mdl__color_scheme:
                __M_writer('            <link rel="stylesheet" href="//storage.googleapis.com/code.getmdl.io/1.1.3/material.')
                __M_writer(str(mdl__color_scheme))
                __M_writer('.min.css">\n')
            else:
                __M_writer('            <link rel="stylesheet" href="//storage.googleapis.com/code.getmdl.io/1.1.3/material.indigo-pink.min.css">\n')
        if image_plugin and image_plugin == 'lightbox':
            __M_writer('        <link href="/assets/lightbox/css/lightbox.css" rel="stylesheet"\n            type="text/css">\n')
        if image_plugin and image_plugin == 'colorbox':
            __M_writer('        <link href="/assets/colorbox/css/colorbox.css" rel="stylesheet"\n            type="text/css">\n')
        if use_bundles:
            if use_cdn:
                __M_writer('            <link href="/assets/css/all.css" rel="stylesheet" type="text/css">\n')
            else:
                __M_writer('            <link href="/assets/css/all-nocdn.css" rel="stylesheet" type="text/css">\n')
        else:
            __M_writer('        <link href="/assets/css/rst.css" rel="stylesheet" type="text/css">\n        <link href="/assets/css/code.css" rel="stylesheet" type="text/css">\n        <link href="/assets/css/styles.css" rel="stylesheet" type="text/css">\n')
            if has_custom_css:
                __M_writer('            <link href="/assets/css/custom.css" rel="stylesheet" type="text/css">\n')
        __M_writer('\n')
        if needs_ipython_css:
            __M_writer('        <link href="/assets/css/ipython.min.css" rel="stylesheet" type="text/css">\n        <link href="/assets/css/nikola_ipython.css" rel="stylesheet" type="text/css">\n')
        return ''
    finally:
        context.caller_stack._pop_frame()


def render_html_translations(context):
    __M_caller = context.caller_stack._push_frame()
    try:
        lang = context.get('lang', UNDEFINED)
        sorted = context.get('sorted', UNDEFINED)
        translations = context.get('translations', UNDEFINED)
        _link = context.get('_link', UNDEFINED)
        abs_link = context.get('abs_link', UNDEFINED)
        messages = context.get('messages', UNDEFINED)
        __M_writer = context.writer()
        __M_writer('\n    <ul class="translations">\n')
        for langname in sorted(translations):
            if langname != lang:
                __M_writer('            <li><a href="')
                __M_writer(str(abs_link(_link("root", None, langname))))
                __M_writer('" rel="alternate" hreflang="')
                __M_writer(str(langname))
                __M_writer('">')
                __M_writer(str(messages("LANGUAGE", langname)))
                __M_writer('</a></li>\n')
        __M_writer('    </ul>\n')
        return ''
    finally:
        context.caller_stack._pop_frame()


"""
__M_BEGIN_METADATA
{"uri": "base_helper.tmpl", "filename": "themes/overminddl1-mdl/templates/base_helper.tmpl", "source_encoding": "utf-8", "line_map": {"16": 0, "21": 2, "22": 66, "23": 89, "24": 132, "25": 155, "26": 165, "32": 68, "41": 68, "42": 69, "43": 70, "44": 70, "45": 70, "46": 71, "47": 72, "48": 74, "49": 76, "50": 77, "51": 80, "52": 81, "53": 83, "54": 84, "55": 84, "56": 84, "57": 88, "58": 88, "59": 88, "65": 134, "76": 134, "77": 135, "78": 136, "79": 136, "80": 136, "81": 137, "82": 138, "83": 139, "84": 140, "85": 140, "86": 140, "87": 140, "88": 140, "89": 142, "90": 143, "91": 143, "92": 143, "93": 146, "94": 147, "95": 148, "96": 149, "97": 149, "98": 149, "99": 149, "100": 149, "101": 151, "102": 152, "103": 152, "104": 152, "110": 3, "136": 3, "137": 6, "138": 7, "139": 8, "140": 10, "141": 11, "142": 13, "143": 14, "144": 15, "145": 17, "146": 18, "147": 21, "148": 21, "149": 21, "150": 24, "151": 25, "152": 25, "153": 25, "154": 27, "155": 28, "156": 29, "157": 29, "158": 29, "159": 31, "160": 32, "161": 33, "162": 33, "163": 33, "164": 34, "165": 35, "166": 35, "167": 35, "168": 35, "169": 35, "170": 37, "171": 38, "172": 39, "173": 41, "174": 41, "175": 41, "176": 44, "177": 44, "178": 45, "179": 45, "180": 47, "181": 48, "182": 49, "183": 49, "184": 49, "185": 49, "186": 49, "187": 49, "188": 49, "189": 52, "190": 53, "191": 54, "192": 54, "193": 54, "194": 56, "195": 57, "196": 58, "197": 58, "198": 58, "199": 60, "200": 61, "201": 61, "202": 61, "203": 63, "204": 64, "205": 64, "206": 65, "207": 65, "213": 91, "224": 91, "225": 92, "226": 93, "227": 94, "228": 94, "229": 94, "230": 94, "231": 94, "232": 95, "233": 96, "234": 96, "235": 96, "236": 98, "237": 99, "238": 100, "239": 100, "240": 100, "241": 101, "242": 102, "243": 105, "244": 106, "245": 109, "246": 110, "247": 113, "248": 114, "249": 115, "250": 116, "251": 117, "252": 119, "253": 120, "254": 123, "255": 124, "256": 127, "257": 128, "258": 129, "264": 157, "274": 157, "275": 159, "276": 160, "277": 161, "278": 161, "279": 161, "280": 161, "281": 161, "282": 161, "283": 161, "284": 164, "290": 284}}
__M_END_METADATA
"""
