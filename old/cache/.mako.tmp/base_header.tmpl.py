# -*- coding:utf-8 -*-
from mako import runtime, filters, cache
UNDEFINED = runtime.UNDEFINED
STOP_RENDERING = runtime.STOP_RENDERING
__M_dict_builtin = dict
__M_locals_builtin = locals
_magic_number = 10
_modified_time = 1470594604.2650168
_enable_loop = True
_template_filename = 'themes/overminddl1-mdl/templates/base_header.tmpl'
_template_uri = 'base_header.tmpl'
_source_encoding = 'utf-8'
_exports = ['html_site_title', 'html_more_button', 'html_header', 'html_navigation_links']


def _mako_get_namespace(context, name):
    try:
        return context.namespaces[(__name__, name)]
    except KeyError:
        _mako_generate_namespaces(context)
        return context.namespaces[(__name__, name)]
def _mako_generate_namespaces(context):
    ns = runtime.TemplateNamespace('base', context._clean_inheritance_tokens(), templateuri='base_helper.tmpl', callables=None,  calling_uri=_template_uri)
    context.namespaces[(__name__, 'base')] = ns

def render_body(context,**pageargs):
    __M_caller = context.caller_stack._push_frame()
    try:
        __M_locals = __M_dict_builtin(pageargs=pageargs)
        _import_ns = {}
        _mako_get_namespace(context, 'base')._populate(_import_ns, ['*'])
        __M_writer = context.writer()
        __M_writer('\n\n')
        __M_writer('\n\n')
        __M_writer('\n\n')
        __M_writer('\n\n')
        __M_writer('\n')
        return ''
    finally:
        context.caller_stack._pop_frame()


def render_html_site_title(context):
    __M_caller = context.caller_stack._push_frame()
    try:
        _import_ns = {}
        _mako_get_namespace(context, 'base')._populate(_import_ns, ['*'])
        abs_link = _import_ns.get('abs_link', context.get('abs_link', UNDEFINED))
        show_blog_title = _import_ns.get('show_blog_title', context.get('show_blog_title', UNDEFINED))
        lang = _import_ns.get('lang', context.get('lang', UNDEFINED))
        logo_url = _import_ns.get('logo_url', context.get('logo_url', UNDEFINED))
        _link = _import_ns.get('_link', context.get('_link', UNDEFINED))
        blog_title = _import_ns.get('blog_title', context.get('blog_title', UNDEFINED))
        __M_writer = context.writer()
        __M_writer('\n    <h1 id="brand" class="mdl-layout__title site-title">\n        <a href="')
        __M_writer(str(abs_link(_link("root", None, lang))))
        __M_writer('" title="')
        __M_writer(filters.html_escape(str(blog_title)))
        __M_writer('" rel="home">\n')
        if logo_url:
            __M_writer('                <img src="')
            __M_writer(str(logo_url))
            __M_writer('" alt="')
            __M_writer(filters.html_escape(str(blog_title)))
            __M_writer('" id="logo">\n')
        if show_blog_title:
            __M_writer('                <span id="blog-title" class="mdl-color-text--primary-contrast">')
            __M_writer(filters.html_escape(str(blog_title)))
            __M_writer('</span>\n')
        __M_writer('        </a>\n    </h1>\n')
        return ''
    finally:
        context.caller_stack._pop_frame()


def render_html_more_button(context):
    __M_caller = context.caller_stack._push_frame()
    try:
        _import_ns = {}
        _mako_get_namespace(context, 'base')._populate(_import_ns, ['*'])
        len = _import_ns.get('len', context.get('len', UNDEFINED))
        base = _mako_get_namespace(context, 'base')
        translations = _import_ns.get('translations', context.get('translations', UNDEFINED))
        more_button_header = _import_ns.get('more_button_header', context.get('more_button_header', UNDEFINED))
        messages = _import_ns.get('messages', context.get('messages', UNDEFINED))
        __M_writer = context.writer()
        __M_writer('\n')
        if len(translations) > 1 or more_button_header:
            __M_writer('        <button id="more-button"\n                class="mdl-button mdl-js-button mdl-button--icon mdl-js-ripple-effect site-header__more-button">\n            <i class="material-icons">more_vert</i>\n        </button>\n        <ul class="mdl-menu mdl-menu--bottom-right mdl-js-menu mdl-js-ripple-effect"\n            for="more-button">\n')
            if more_button_header:
                for url, title, text in more_button_header:
                    __M_writer('                <li class="mdl-menu__item">\n                    <a href="')
                    __M_writer(str(url))
                    __M_writer('" title="')
                    __M_writer(str(title))
                    __M_writer('" >')
                    __M_writer(str(text))
                    __M_writer('</a>\n                </li>\n')
            if len(translations) > 1:
                __M_writer('                <li class="mdl-menu__item">')
                __M_writer(str(messages("Languages:")))
                __M_writer('</li>\n                <li class="mdl-menu__item">')
                __M_writer(str(base.html_translations()))
                __M_writer('</li>\n')
            __M_writer('        </ul>\n')
        return ''
    finally:
        context.caller_stack._pop_frame()


def render_html_header(context):
    __M_caller = context.caller_stack._push_frame()
    try:
        _import_ns = {}
        _mako_get_namespace(context, 'base')._populate(_import_ns, ['*'])
        mdl__navigation_large_screen_only = _import_ns.get('mdl__navigation_large_screen_only', context.get('mdl__navigation_large_screen_only', UNDEFINED))
        def html_navigation_links():
            return render_html_navigation_links(context)
        mdl__multiple_header = _import_ns.get('mdl__multiple_header', context.get('mdl__multiple_header', UNDEFINED))
        def html_more_button():
            return render_html_more_button(context)
        mdl__header_scroll = _import_ns.get('mdl__header_scroll', context.get('mdl__header_scroll', UNDEFINED))
        navigation_links = _import_ns.get('navigation_links', context.get('navigation_links', UNDEFINED))
        messages = _import_ns.get('messages', context.get('messages', UNDEFINED))
        mdl__header_transparent = _import_ns.get('mdl__header_transparent', context.get('mdl__header_transparent', UNDEFINED))
        top_nav_header = _import_ns.get('top_nav_header', context.get('top_nav_header', UNDEFINED))
        mdl__header_waterfall = _import_ns.get('mdl__header_waterfall', context.get('mdl__header_waterfall', UNDEFINED))
        template_hooks = _import_ns.get('template_hooks', context.get('template_hooks', UNDEFINED))
        search_form = _import_ns.get('search_form', context.get('search_form', UNDEFINED))
        rel_link = _import_ns.get('rel_link', context.get('rel_link', UNDEFINED))
        title_row_middle = _import_ns.get('title_row_middle', context.get('title_row_middle', UNDEFINED))
        lang = _import_ns.get('lang', context.get('lang', UNDEFINED))
        navigation_row_middle = _import_ns.get('navigation_row_middle', context.get('navigation_row_middle', UNDEFINED))
        def html_site_title():
            return render_html_site_title(context)
        mdl__header_waterfall_hide_top = _import_ns.get('mdl__header_waterfall_hide_top', context.get('mdl__header_waterfall_hide_top', UNDEFINED))
        mdl__header_seamed = _import_ns.get('mdl__header_seamed', context.get('mdl__header_seamed', UNDEFINED))
        permalink = _import_ns.get('permalink', context.get('permalink', UNDEFINED))
        __M_writer = context.writer()
        __M_writer('\n    <header id="header" class="mdl-layout__header site-header\n')
        if mdl__header_scroll:
            __M_writer('mdl-layout__header--scroll\n')
        if mdl__header_waterfall:
            __M_writer('mdl-layout__header--waterfall\n')
        if mdl__header_waterfall_hide_top:
            __M_writer('mdl-layout__header--waterfall-hide-top\n')
        if mdl__header_transparent:
            __M_writer('mdl-layout__header--transparent\n')
        if mdl__header_seamed:
            __M_writer('mdl-layout__header--seamed\n')
        __M_writer('    ">\n        <div class="mdl-layout__header-row site-header__title-row\n')
        if title_row_middle:
            __M_writer('site-header__row-middle\n')
        __M_writer('        ">\n            ')
        __M_writer(str(html_site_title()))
        __M_writer('\n')
        if mdl__multiple_header:
            __M_writer('        </div>\n        <div class="mdl-layout__header-row site-header__navigation-row\n')
            if mdl__navigation_large_screen_only:
                __M_writer('mdl-layout--large-screen-only\n')
            if navigation_row_middle:
                __M_writer('site-header__row-middle\n')
            __M_writer('        ">\n')
        else:
            __M_writer('            <div class="mdl-layout-spacer"></div>\n')
        if top_nav_header:
            __M_writer('            <span class="sr-only">main navigation</span>\n            <nav class="mdl-navigation site-header__navigation">\n')
            for url, text in navigation_links[lang]:
                if rel_link(permalink, url) == "#":
                    __M_writer('                      <a class="mdl-navigation__link is-active" href="')
                    __M_writer(str(permalink))
                    __M_writer('">')
                    __M_writer(str(text))
                    __M_writer(' <span class="sr-only">')
                    __M_writer(str(messages("(active)", lang)))
                    __M_writer('</span></a>\n')
                else:
                    __M_writer('                      <a class="mdl-navigation__link" href="')
                    __M_writer(str(url))
                    __M_writer('">')
                    __M_writer(str(text))
                    __M_writer('</a>\n')
            __M_writer('              ')
            __M_writer(str(template_hooks['menu']()))
            __M_writer('\n              ')
            __M_writer(str(template_hooks['menu_alt']()))
            __M_writer('\n            </nav>\n')
        if search_form:
            __M_writer('                <div class="site-header__search" role="search">\n                    ')
            __M_writer(str(search_form))
            __M_writer('\n                </div>\n')
        __M_writer('            ')
        __M_writer(str(html_more_button()))
        __M_writer('\n        </div>\n    </header>\n    ')
        __M_writer(str(html_navigation_links()))
        __M_writer('\n    ')
        __M_writer(str(template_hooks['page_header']()))
        __M_writer('\n')
        return ''
    finally:
        context.caller_stack._pop_frame()


def render_html_navigation_links(context):
    __M_caller = context.caller_stack._push_frame()
    try:
        _import_ns = {}
        _mako_get_namespace(context, 'base')._populate(_import_ns, ['*'])
        template_hooks = _import_ns.get('template_hooks', context.get('template_hooks', UNDEFINED))
        drawer_title = _import_ns.get('drawer_title', context.get('drawer_title', UNDEFINED))
        rel_link = _import_ns.get('rel_link', context.get('rel_link', UNDEFINED))
        lang = _import_ns.get('lang', context.get('lang', UNDEFINED))
        messages = _import_ns.get('messages', context.get('messages', UNDEFINED))
        drawer_note = _import_ns.get('drawer_note', context.get('drawer_note', UNDEFINED))
        navigation_links = _import_ns.get('navigation_links', context.get('navigation_links', UNDEFINED))
        drawer_logo_url = _import_ns.get('drawer_logo_url', context.get('drawer_logo_url', UNDEFINED))
        permalink = _import_ns.get('permalink', context.get('permalink', UNDEFINED))
        mdl__drawer_small_screen_only = _import_ns.get('mdl__drawer_small_screen_only', context.get('mdl__drawer_small_screen_only', UNDEFINED))
        drawer_description = _import_ns.get('drawer_description', context.get('drawer_description', UNDEFINED))
        drawer_show_title = _import_ns.get('drawer_show_title', context.get('drawer_show_title', UNDEFINED))
        __M_writer = context.writer()
        __M_writer('\n    <div id="drawer" class="mdl-layout__drawer site-drawer\n')
        if mdl__drawer_small_screen_only:
            __M_writer('mdl-layout--small-screen-only\n')
        __M_writer('    ">\n')
        if drawer_title:
            __M_writer('        <div class="mdl-layout__title site-drawer__title">\n')
            if drawer_logo_url:
                __M_writer('                <img src="')
                __M_writer(str(drawer_logo_url))
                __M_writer('" alt="')
                __M_writer(filters.html_escape(str(drawer_title)))
                __M_writer('">\n')
            if drawer_show_title:
                __M_writer('                <span>')
                __M_writer(filters.html_escape(str(drawer_title)))
                __M_writer('</span>\n')
            __M_writer('        </div>\n')
        if drawer_description:
            __M_writer('        <div class="site-drawer__description">\n            ')
            __M_writer(str(drawer_description))
            __M_writer('\n        </div>\n')
        __M_writer('        <span class="sr-only">side navigation</span>\n        <nav class="mdl-navigation site-drawer__navigation">\n')
        for url, text in navigation_links[lang]:
            if rel_link(permalink, url) == "#":
                __M_writer('                    <a class="mdl-navigation__link is-active" href="')
                __M_writer(str(permalink))
                __M_writer('">')
                __M_writer(str(text))
                __M_writer(' <span class="sr-only">')
                __M_writer(str(messages("(active)", lang)))
                __M_writer('</span></a>\n')
            else:
                __M_writer('                    <a class="mdl-navigation__link" href="')
                __M_writer(str(url))
                __M_writer('">')
                __M_writer(str(text))
                __M_writer('</a>\n')
        __M_writer('            ')
        __M_writer(str(template_hooks['menu']()))
        __M_writer('\n            ')
        __M_writer(str(template_hooks['menu_alt']()))
        __M_writer('\n        </nav>\n')
        if drawer_note:
            __M_writer('        <div class="site-drawer__note">\n            ')
            __M_writer(str(drawer_note))
            __M_writer('\n        </div>\n')
        __M_writer('    </div>\n')
        return ''
    finally:
        context.caller_stack._pop_frame()


"""
__M_BEGIN_METADATA
{"uri": "base_header.tmpl", "filename": "themes/overminddl1-mdl/templates/base_header.tmpl", "source_encoding": "utf-8", "line_map": {"256": 107, "257": 107, "258": 107, "259": 110, "260": 110, "261": 110, "262": 111, "263": 111, "264": 113, "265": 114, "266": 115, "267": 115, "268": 118, "274": 268, "23": 2, "26": 0, "33": 2, "34": 65, "35": 78, "36": 119, "37": 142, "43": 67, "55": 67, "56": 69, "57": 69, "58": 69, "59": 69, "60": 70, "61": 71, "62": 71, "63": 71, "64": 71, "65": 71, "66": 73, "67": 74, "68": 74, "69": 74, "70": 76, "76": 121, "87": 121, "88": 122, "89": 123, "90": 129, "91": 130, "92": 131, "93": 132, "94": 132, "95": 132, "96": 132, "97": 132, "98": 132, "99": 136, "100": 137, "101": 137, "102": 137, "103": 138, "104": 138, "105": 140, "111": 4, "140": 4, "141": 6, "142": 7, "143": 9, "144": 10, "145": 12, "146": 13, "147": 15, "148": 16, "149": 18, "150": 19, "151": 21, "152": 23, "153": 24, "154": 26, "155": 27, "156": 27, "157": 28, "158": 29, "159": 31, "160": 32, "161": 34, "162": 35, "163": 37, "164": 38, "165": 39, "166": 41, "167": 42, "168": 44, "169": 45, "170": 46, "171": 46, "172": 46, "173": 46, "174": 46, "175": 46, "176": 46, "177": 47, "178": 48, "179": 48, "180": 48, "181": 48, "182": 48, "183": 51, "184": 51, "185": 51, "186": 52, "187": 52, "188": 55, "189": 56, "190": 57, "191": 57, "192": 60, "193": 60, "194": 60, "195": 63, "196": 63, "197": 64, "198": 64, "204": 80, "222": 80, "223": 82, "224": 83, "225": 85, "226": 86, "227": 87, "228": 88, "229": 89, "230": 89, "231": 89, "232": 89, "233": 89, "234": 91, "235": 92, "236": 92, "237": 92, "238": 94, "239": 96, "240": 97, "241": 98, "242": 98, "243": 101, "244": 103, "245": 104, "246": 105, "247": 105, "248": 105, "249": 105, "250": 105, "251": 105, "252": 105, "253": 106, "254": 107, "255": 107}}
__M_END_METADATA
"""
