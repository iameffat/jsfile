!function (_0x4219x2) {
    _0x4219x2.fn.pbtLazy = function (_0x4219x3) {
        return _0x4219x3 = _0x4219x2.extend({
            onScroll: !0
        }, _0x4219x3), this.each(function () {
            let _0x4219x4 = _0x4219x2(this),
                _0x4219x5 = _0x4219x2(window),
                _0x4219x6 = _0x4219x4.width() >= 1 ? _0x4219x4.width() : 1,
                _0x4219x7 = _0x4219x4.height() >= 1 ? _0x4219x4.height() : 1,
                _0x4219x8 = 'w' + Math.round(_0x4219x6 + _0x4219x6 / 10) + '-h' + Math.round(_0x4219x7 + _0x4219x7 / 10) + '-p-k-no-nu',
                _0x4219x9 = _0x4219x4.data('src'),
                _0x4219xa = _0x4219x9.toLowerCase().match('.webp') ? '' : '-rw';
            _0x4219x9.match('resources.blogblog.com') && (_0x4219x9 = 'undefined' != typeof noThumbnail ? noThumbnail : pbt.noThumb), (_0x4219x9.match('/img/a') || _0x4219x9.match('/blogger_img_proxy')) && _0x4219x9.match('=') && (_0x4219x9 = _0x4219x9.split('=')[0] + '=w72-h72-p-k-no-nu'), (_0x4219x9.match('/img/a') || _0x4219x9.match('/blogger_img_proxy')) && !_0x4219x9.match('=') && (_0x4219x9 += '=w72-h72-p-k-no-nu'), _0x4219x9.match('/blogger_img_proxy') && _0x4219x9.match('testonly') && (_0x4219x9 = _0x4219x9.replace('-testonly.', '.'));
            let _0x4219xb;

            function _0x4219xc() {
                let _0x4219x2 = new Image;
                _0x4219x2.onload = function () {
                    _0x4219x4.attr('style', "background-image:url('" + this.src + "')").addClass('pbt-lazy')
                }, _0x4219x2.src = _0x4219xb
            }
            _0x4219xb = _0x4219x9.match('/s72-c') ? _0x4219x9.replace('/s72-c', '/' + _0x4219x8 + _0x4219xa) : _0x4219x9.match('/w72-h') ? _0x4219x9.replace('/w72-h72-p-k-no-nu', '/' + _0x4219x8 + _0x4219xa) : _0x4219x9.match('=w72-h') ? _0x4219x9.replace('=w72-h72-p-k-no-nu', '=' + _0x4219x8 + _0x4219xa) : _0x4219x9, !0 == _0x4219x3.onScroll ? _0x4219x5.on('load resize scroll', function _0x4219x2() {
                _0x4219x5.scrollTop() + _0x4219x5.height() >= _0x4219x4.offset().top && (_0x4219x5.off('load resize scroll', _0x4219x2), _0x4219xc())
            }).trigger('scroll') : _0x4219x5.on('load', function _0x4219x2() {
                _0x4219x5.off('load', _0x4219x2), _0x4219xc()
            }).trigger('load')
        })
    }
}(jQuery);
const $w = $(window),
    $d = $(document),
    $h = $('html'),
    $b = $('body');

function getAttr(_0x4219x2, _0x4219x3) {
    let _0x4219x4 = _0x4219x2.split('$'),
        _0x4219x5 = /([^{\}]+(?=}))/g,
        _0x4219x6 = _0x4219x4.length;
    for (let _0x4219x7 = 0; _0x4219x7 < _0x4219x6; _0x4219x7++) {
        let _0x4219x8 = _0x4219x4[_0x4219x7].split('=');
        if (_0x4219x8[0].trim() == _0x4219x3) {
            let _0x4219x9 = _0x4219x8[1];
            if (_0x4219x9 && null != _0x4219x9.match(_0x4219x5)) {
                return String(_0x4219x9.match(_0x4219x5)).trim()
            };
            break
        }
    };
    return !1
}

function darkModeLogo(_0x74e9x2) {
    $('[data-dark-src]').each(function () {
        let _0x74e9x3 = $(this),
            _0x74e9x4 = _0x74e9x3.data('dark-src'),
            _0x74e9x5 = _0x74e9x3.data('src');
        'true' == _0x74e9x2 ? _0x74e9x3.attr('src', _0x74e9x4) : _0x74e9x3.attr('src', _0x74e9x5)
    })
}

function openSearch() {
    localStorage.search_term = '', $('.overlay-bg').addClass('ms17'), $b.addClass('search-on'), setTimeout(function () {
        $('.main-search input').focus()
    }, 170)
}

function cleanSearch() {
    setTimeout(function () {
        $('.main-search input').blur().val(''), $('.search-results').html('').removeClass('scroll').parent().removeClass('visible'), $('.overlay-bg').removeClass('ms17')
    }, 170)
}

function closeSearch() {
    $('.search-on .overlay-bg').on('click', function () {
        $b.removeClass('search-on'), cleanSearch()
    }), $w.on('keydown', function (_0x4219x2) {
        27 == _0x4219x2.keyCode && ($b.removeClass('search-on'), cleanSearch())
    })
}

function closeShare() {
    $b.removeClass('share-on'), setTimeout(function () {
        $('.overlay-bg').removeClass('ms17')
    }, 170)
}

function openShare() {
    $('.overlay-bg').addClass('ms17'), $b.addClass('share-on'), $('.hide-modal, .share-on .overlay-bg').on('click', function () {
        closeShare()
    }), $w.on('keydown', function (_0x4219x2) {
        27 == _0x4219x2.keyCode && closeShare()
    })
}

function navShortcuts(_0x4219x2) {
    $(_0x4219x2).each(function () {
        let _0x4219x2 = $(this).attr('href');
        _0x4219x2 && window.open(_0x4219x2, '_self')
    })
}

function msgError(_0x4219x2) {
    return `${''}${'<span class="error-msg">'}${''}${('search'!=_0x4219x2?'<b>Error:</b>&nbsp;':'')+pbt .noResults }${''}${'</span>'}${''}`
}

function beforeLoader() {
    return '<div class="loader"><svg class="spinner" viewBox="0 0 50 50"><circle class="path" cx="25" cy="25" r="20"></circle></svg></div>'
}

function getFeedUrl(_0x4219x2, _0x4219x3) {
    let _0x4219x4;
    return _0x4219x4 = 'recent' === _0x4219x3 ? `${''}${'/search/?by-date=true&max-results='}${''}${_0x4219x2}${''}${'&amp=1'}${''}` : `${''}${'/search/label/'}${''}${_0x4219x3}${''}${'?by-date=true&max-results='}${''}${_0x4219x2}${''}${'&amp=1'}${''}`
}

function getPostID(_0x4219x2) {
    return _0x4219x2.id
}

function getPostLink(_0x4219x2) {
    return _0x4219x2.link
}

function getPostTitle(_0x4219x2) {
    return _0x4219x2.title
}

function getPostAuthor(_0x4219x2) {
    '' != pbt.postAuthorLabel && pbt.postAuthorLabel;
    let _0x4219x3 = pbt.postAuthor ? `${''}${'<span class="entry-author"><span class="author-name">'}${''}${_0x4219x2 .author }${''}${'</span></span>'}${''}` : '';
    return _0x4219x3
}

function getPostDate(_0x4219x2) {
    let _0x4219x3 = _0x4219x2.published.date,
        _0x4219x4 = _0x4219x2.published.datetime,
        _0x4219x5 = pbt.postAuthor && '' != pbt.postDateLabel ? `${''}${'<span class="sp">'}${''}${pbt .postDateLabel }${''}${'</span>'}${''}` : '',
        _0x4219x6 = !0 == pbt.postDate ? `${''}${'<span class="entry-time">'}${''}${_0x4219x5}${''}${'<time class="published" datetime="'}${''}${_0x4219x4}${''}${'">'}${''}${_0x4219x3}${''}${'</time></span>'}${''}` : '',
        _0x4219x7 = !0 == pbt.postDate ? `${''}${'<span class="entry-time"><time class="published" datetime="'}${''}${_0x4219x4}${''}${'">'}${''}${_0x4219x3}${''}${'</time></span>'}${''}` : '';
    return [_0x4219x6, _0x4219x7]
}

function getPostMeta(_0x4219x2, _0x4219x3) {
    let _0x4219x4 = !0 == pbt.postAuthor || !0 == pbt.postDate ? `${''}${'<div class="entry-meta">'}${''}${_0x4219x2+_0x4219x3[0]}${''}${'</div>'}${''}` : '',
        _0x4219x5 = !0 == pbt.postDate ? `${''}${'<div class="entry-meta">'}${''}${_0x4219x3[1]}${''}${'</div>'}${''}` : '';
    return [_0x4219x4, _0x4219x5]
}

function getPostImage(_0x4219x2) {
    return _0x4219x2.thumbnail.src
}

function getPostImageType(_0x4219x2, _0x4219x3) {
    let _0x4219x4 = function (_0x4219x4) {
            let _0x4219x5 = `${''}${' yt-img'}${''}${_0x4219x4?':x'+_0x4219x4:''}${''}${''}${''}`;
            return 'youtube' == _0x4219x2.thumbnail.source ? _0x4219x5 : 'video' == _0x4219x3 ? _0x4219x5 : ''
        },
        _0x4219x5 = ['', _0x4219x4(), _0x4219x4(2), _0x4219x4(3), _0x4219x4(4)];
    return _0x4219x5
}

function getPostTag(_0x4219x2) {
    let _0x4219x3 = _0x4219x2.category && pbt.postCategory ? `${''}${'<span class="entry-tag">'}${''}${_0x4219x2 .category }${''}${'</span>'}${''}` : '';
    return _0x4219x3
}

function getPostSummary(_0x4219x2, _0x4219x3) {
    let _0x4219x4 = _0x4219x2.summary && pbt.postSummary ? `${''}${'<span class="entry-excerpt excerpt">'}${''}${_0x4219x2 .summary  .substr (0,_0x4219x3)}${''}${'…</span>'}${''}` : '';
    return _0x4219x4
}

function getPostContent(_0x4219x2) {
    let _0x4219x3 = _0x4219x2.type,
        _0x4219x4 = _0x4219x2.post,
        _0x4219x5 = _0x4219x2.index,
        _0x4219x6 = _0x4219x2.num;
    _0x4219x2.headline, _0x4219x2.target;
    let _0x4219x7 = '',
        _0x4219x8 = getPostDate(_0x4219x4),
        _0x4219x9 = getPostAuthor(_0x4219x4),
        _0x4219xa = (getPostTag(_0x4219x4), getPostTitle(_0x4219x4)),
        _0x4219xb = getPostLink(_0x4219x4),
        _0x4219xc = getPostImage(_0x4219x4),
        _0x4219x26 = getPostImageType(_0x4219x4, _0x4219x3),
        _0x4219x27 = getPostMeta(_0x4219x9, _0x4219x8);
    switch (_0x4219x3) {
    case 'search':
        _0x4219x7 = _0x4219x5 != _0x4219x6 ? `${''}${'<div class="post item-'}${''}${_0x4219x5}${''}${'"><a class="entry-thumbnail'}${''}${_0x4219x26[3]}${''}${'" href="'}${''}${_0x4219xb}${''}${'" title="'}${''}${_0x4219xa}${''}${'"><span class="thumbnail" data-src="'}${''}${_0x4219xc}${''}${'"></span></a><div class="entry-header"><h2 class="entry-title"><a href="'}${''}${_0x4219xb}${''}${'">'}${''}${_0x4219xa}${''}${'</a></h2>'}${''}${_0x4219x27[1]}${''}${'</div></div>'}${''}` : '';
        break;
    case 'related':
        _0x4219x7 = _0x4219x5 != _0x4219x6 - 1 ? `${''}${'<div class="post item-'}${''}${_0x4219x5}${''}${'"><a class="entry-thumbnail'}${''}${_0x4219x26[2]}${''}${'" href="'}${''}${_0x4219xb}${''}${'" title="'}${''}${_0x4219xa}${''}${'"><span class="thumbnail" data-src="'}${''}${_0x4219xc}${''}${'"></span></a><div class="entry-header"><h2 class="entry-title"><a href="'}${''}${_0x4219xb}${''}${'">'}${''}${_0x4219xa}${''}${'</a></h2>'}${''}${_0x4219x27[1]}${''}${'</div></div>'}${''}` : ''
    };
    return _0x4219x7
}

function getRecentPostsData(_0x4219x2) {
    let _0x4219x3 = $.ajax({
            url: getFeedUrl(_0x4219x2, 'recent'),
            type: 'GET',
            async: !1,
            dataType: 'html',
            cache: !0,
            success: function (_0x4219x2) {
                return _0x4219x2
            }
        }).responseText,
        _0x4219x4 = JSON.parse($(_0x4219x3).find('#data').text()),
        _0x4219x5 = _0x4219x4.posts;
    return _0x4219x5
}

function getPosts(_0x4219x2) {
    let _0x4219x3 = _0x4219x2.t,
        _0x4219x4 = _0x4219x2.type,
        _0x4219x5 = _0x4219x2.num,
        _0x4219x6 = _0x4219x2.label ? _0x4219x2.label : 'recent',
        _0x4219x7 = _0x4219x2.id,
        _0x4219x8 = _0x4219x2.link,
        _0x4219x9 = _0x4219x2.headline,
        _0x4219xa = _0x4219x2.target;
    $.ajax({
        url: 'search' != _0x4219x4 ? getFeedUrl(_0x4219x5, _0x4219x6) : _0x4219x8,
        type: 'GET',
        async: !0,
        dataType: 'html',
        cache: !0,
        beforeSend: function (_0x4219x2) {
            'search' === _0x4219x4 ? _0x4219x3.html(beforeLoader()).removeClass('scroll').parent().addClass('visible').find('.view-all').remove() : _0x4219x3.html(beforeLoader())
        },
        success: function (_0x4219x2) {
            let _0x4219x8 = '',
                _0x4219xb = 0,
                _0x4219xc = !1;
            _0x4219x8 = `${''}${'<div class="'}${''}${_0x4219x4}${''}${'-items">'}${''}`;
            let _0x4219x26 = $(_0x4219x2).find('#data');
            if (_0x4219x26.length) {
                let _0x4219x27 = JSON.parse(_0x4219x26.text()).posts;
                if (_0x4219x27) {
                    if ('related' == _0x4219x4) {
                        1 == _0x4219x27.length && 'recent' != _0x4219x6 && (_0x4219x27 = getRecentPostsData(_0x4219x5));
                        let _0x4219x2a = _0x4219x27.length;
                        for (let _0x4219x2b = 0; _0x4219x2b < _0x4219x2a; _0x4219x2b++) {
                            let _0x4219x2c = _0x4219x27[_0x4219x2b];
                            if (1 != _0x4219x27.length && getPostID(_0x4219x2c) == _0x4219x7) {
                                _0x4219x27.splice(_0x4219x2b, 1);
                                break
                            }
                        }
                    };
                    let _0x4219x2d = _0x4219x27.length;
                    for (let _0x4219x2e = 0; _0x4219x2e < _0x4219x2d; _0x4219x2e++) {
                        let _0x4219x2f = _0x4219x27[_0x4219x2e];
                        _0x4219x8 += getPostContent({
                            type: _0x4219x4,
                            post: _0x4219x2f,
                            index: _0x4219x2e,
                            num: _0x4219x5,
                            headline: _0x4219x9,
                            target: _0x4219xa
                        })
                    };
                    _0x4219xb = _0x4219x2d
                } else {
                    _0x4219xc = !0
                }
            } else {
                _0x4219xc = !0
            };
            _0x4219x8 += '</div>', _0x4219x8 = _0x4219xc ? msgError(_0x4219x4) : _0x4219x8, _0x4219x3.html(_0x4219x8), 'search' == _0x4219x4 && (_0x4219x5 < _0x4219xb && _0x4219x3.parent().append(`${''}${'<a class="view-all btn" href="/search?q='}${''}${_0x4219x6}${''}${'&by-date=true">'}${''}${pbt .viewAll }${''}${'</a>'}${''}`), setTimeout(function () {
                _0x4219x3.addClass('scroll')
            }, 500)), 'search' === _0x4219x4 ? _0x4219x3.find('span.thumbnail').pbtLazy({
                onScroll: !1
            }) : _0x4219x3.find('span.thumbnail').pbtLazy()
        },
        error: function () {
            _0x4219x3.html(msgError(_0x4219x4))
        }
    })
}

function getSearch(_0x4219x2, _0x4219x3) {
    let _0x4219x4 = _0x4219x2.val(),
        _0x4219x5 = _0x4219x4.trim();
    '' != _0x4219x5 && _0x4219x5 != localStorage.search_term && (localStorage.search_term = _0x4219x5, getPosts({
        t: _0x4219x3,
        type: 'search',
        num: 4,
        label: _0x4219x5,
        link: `${''}${'/search/?q='}${''}${_0x4219x5}${''}${'&by-date=true&max-results=5&amp=1'}${''}`
    }))
}

function getStickySidebar(_0x4219x2) {
    $(_0x4219x2).each(function () {
        if (pbt.stickySidebar) {
            let _0x4219x2 = pbt.stickyMenu ? $('.header-inner').height() + 30 : 30;
            $(this).pbtStickySidebar({
                containerSelector: '.content-wrap > .container',
                additionalMarginTop: _0x4219x2,
                additionalMarginBottom: 30
            })
        }
    })
}

function beautiAvatar(_0x4219x2) {
    $(_0x4219x2).attr('src', function (_0x4219x2, _0x4219x3) {
        let _0x4219x4 = '//blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiCxxt0n6b048h4UEHf-L5T22U8xCk-IsG2qbfVUMBMKdt2t3ijO6qz--5UBg63qH4V_6z8uIBe7z6VNnueFbF3XKIWkCJPmFQqfm3Rmx3tpBOk74LGDZrUEgGnJF2-VDrzlkZSVyJs2sYjtiCytrEjsw23o88dqy5mdjw0KPwNuySVA7iYfdHWYpgsuQ/s35/avatar.webp';
        return _0x4219x3 = _0x4219x3.replace('//resources.blogblog.com/img/blank.gif', _0x4219x4).replace('//lh3.googleusercontent.com/zFdxGE77vvD2w5xHy6jkVuElKv-U9_9qLkRYK8OnbDeJPtjSZ82UPq5w6hJ-SA=s35', _0x4219x4).replace('/s35', '/s39-rw').replace('=s35', '=s39-rw')
    })
}

$('#bCjqMi').pbtMenu(), $h.each(function () {
    let _0x74e9x2 = $(this),
        _0x74e9x3 = localStorage.dark_mode;
    !0 != pbt.isDark && !1 != pbt.userDarkMode && ('true' == _0x74e9x3 && (_0x74e9x2.addClass('ejLOUz'), darkModeLogo(_0x74e9x3)), $('.darkmode-toggle').on('click', function () {
        $(this), _0x74e9x2.toggleClass('ejLOUz'), _0x74e9x3 = 'true' != _0x74e9x3 ? 'true' : 'false', localStorage.dark_mode = _0x74e9x3, darkModeLogo(_0x74e9x3)
    }))
})

$('#main-menu').pbtMenu(), $('.search-toggle').on('click', function (_0x4219x2) {
    openSearch(), closeSearch()
}), $w.on('keydown', function (_0x4219x2) {
    _0x4219x2.ctrlKey && 75 == _0x4219x2.keyCode && (_0x4219x2.preventDefault(), openSearch(), closeSearch())
}), $('.social-icons a').each(function () {
    let _0x4219x2 = $(this),
        _0x4219x3 = _0x4219x2.attr('href'),
        _0x4219x4 = _0x4219x3.split('#'),
        _0x4219x5 = _0x4219x2.data('text');
    if (_0x4219x4[1] && !0 == _0x4219x5) {
        let _0x4219x6 = _0x4219x4[1].trim();
        '' != _0x4219x6 && _0x4219x2.append(`${''}${'<span class="text">'}${''}${_0x4219x6}${''}${'</span>'}${''}`)
    };
    _0x4219x2.attr('href', _0x4219x4[0].trim())
}), $('.MailChimp .widget-content').each(function () {
    let _0x4219x2 = $(this),
        _0x4219x3 = _0x4219x2.data('shortcode');
    if (_0x4219x3) {
        let _0x4219x4 = getAttr(_0x4219x3, 'title'),
            _0x4219x5 = getAttr(_0x4219x3, 'text');
        !1 != _0x4219x4 && _0x4219x2.find('.mailchimp-title').html(_0x4219x4), !1 != _0x4219x5 && _0x4219x2.find('.mailchimp-text').html(_0x4219x5)
    }
}), $('.post-body b').each(function () {
    let _0x4219x2 = $(this),
        _0x4219x3 = _0x4219x2.text();

    function _0x4219x4(_0x4219x2) {
        return _0x4219x3.trim().match(_0x4219x2)
    }

    function _0x4219x5(_0x4219x3, _0x4219x5) {
        _0x4219x4(_0x4219x3) && ($b.addClass(_0x4219x5), _0x4219x2.remove(), 'is-right' == _0x4219x5 && $b.removeClass('is-left'))
    }
    _0x4219x4('{contactForm}') && (_0x4219x2.replaceWith('<div class="contact-form-widget"/>'), $('.post-body .contact-form-widget').append($('#ContactForm1 form')));
    let _0x4219x6 = [{
        shc: '{leftSidebar}',
        cls: 'is-left'
    }, {
        shc: '{rightSidebar}',
        cls: 'is-right'
    }, {
        shc: '{fullWidth}',
        cls: 'no-sidebar'
    }];
    for (let _0x4219x7 in _0x4219x6) {
        _0x4219x5(_0x4219x6[_0x4219x7].shc, _0x4219x6[_0x4219x7].cls)
    }
}), $('.post-body a').each(function () {
    let _0x4219x2 = $(this),
        _0x4219x3 = _0x4219x2.text(),
        _0x4219x4 = getAttr(_0x4219x3, 'text');
    _0x4219x3.match('getButton') && _0x4219x4 && (_0x4219x2.replaceText(/([^{\}]+(?=}))/g, '<em>$1</em>'), _0x4219x2.find('em').replaceText('$', '%s'), _0x4219x2.each(function () {
        let _0x4219x2 = $(this),
            _0x4219x3 = _0x4219x2.text(),
            _0x4219x4 = getAttr(_0x4219x3, 'text'),
            _0x4219x5 = getAttr(_0x4219x3, 'icon'),
            _0x4219x6 = getAttr(_0x4219x3, 'color'),
            _0x4219x7 = getAttr(_0x4219x3, 'size'),
            _0x4219x8 = getAttr(_0x4219x3, 'info'),
            _0x4219x9 = _0x4219x2.parent().attr('style');
        _0x4219x2.addClass(_0x4219x7 ? 'button btn x2' : 'button btn').text(_0x4219x4.replace('%s', '$')), !1 != _0x4219x5 && _0x4219x2.addClass(_0x4219x5), _0x4219x6 && _0x4219x2.addClass('color').attr('style', `${''}${'background:'}${''}${_0x4219x6}${''}${';'}${''}`), _0x4219x9 && _0x4219x9.match('center') && _0x4219x2.addClass('is-c'), _0x4219x8 && (_0x4219x2.addClass(_0x4219x5 ? 'x2 ' + _0x4219x5 : 'x2'), _0x4219x2.append(`${''}${'<span class="btn-info">'}${''}${_0x4219x8 .replace ('%s','$')}${''}${'</span>'}${''}`))
    }))
}), $('.post-body blockquote').each(function () {
    let _0x4219x2 = $(this),
        _0x4219x3 = [{
            shc: '{alertSuccess}',
            cls: 'success'
        }, {
            shc: '{alertInfo}',
            cls: 'info'
        }, {
            shc: '{alertWarning}',
            cls: 'warning'
        }, {
            shc: '{alertError}',
            cls: 'error'
        }, {
            shc: '{codeBox}',
            cls: 'code'
        }],
        _0x4219x4 = _0x4219x2.text(),
        _0x4219x5 = _0x4219x2.html();

    function _0x4219x6(_0x4219x3, _0x4219x6) {
        _0x4219x4.trim().match(_0x4219x3) && (_0x4219x5 = _0x4219x5.replace(_0x4219x3, ''), _0x4219x2.replaceWith('code' != _0x4219x6 ? `${''}${'<div class="alert-message alert-'}${''}${_0x4219x6}${''}${'">'}${''}${_0x4219x5}${''}${'</div>'}${''}` : `${''}${'<pre class="code-box">'}${''}${_0x4219x5}${''}${'</pre>'}${''}`))
    }
    for (let _0x4219x7 in _0x4219x3) {
        _0x4219x6(_0x4219x3[_0x4219x7].shc, _0x4219x3[_0x4219x7].cls)
    }
}), $('.pbt-wo').on('click', function (_0x4219x2) {
    _0x4219x2.preventDefault();
    let _0x4219x3 = $(this),
        _0x4219x4 = _0x4219x3.attr('href'),
        _0x4219x5 = window.open(_0x4219x4, '_blank', 'scrollbars=yes,resizable=yes,toolbar=0,width=860,height=540,top=50,left=50');
    _0x4219x5.focus()
}), $w.on('keydown', function (_0x4219x2) {
    pbt.isPost && _0x4219x2.ctrlKey && 83 == _0x4219x2.keyCode && (_0x4219x2.preventDefault(), openShare())
}), $('.post-share .show-more .btn, .share-toggle').on('click', function () {
    openShare()
}), $('.copy-link').each(function () {
    let _0x4219x2 = $(this),
        _0x4219x3 = _0x4219x2.children('input');
    _0x4219x3.on('click', function () {
        this.select()
    }), _0x4219x2.children('button').on('click', function () {
        navigator.clipboard.writeText(_0x4219x3.val()), _0x4219x2.removeClass('copied-off').addClass('copied'), setTimeout(function () {
            _0x4219x2.removeClass('copied').addClass('copied-off')
        }, 3e3)
    })
}), $('.about-author .author-text').each(function () {
    let _0x4219x2 = $(this),
        _0x4219x3 = _0x4219x2.find('a');
    _0x4219x3.length && (_0x4219x3.each(function () {
        let _0x4219x2 = $(this),
            _0x4219x3 = _0x4219x2.text().trim(),
            _0x4219x4 = _0x4219x2.attr('href'),
            _0x4219x5 = 'external-link' == _0x4219x3 ? 'website' : _0x4219x3;
        _0x4219x2.replaceWith(`${''}${'<li class="'}${''}${_0x4219x5}${''}${'"><a class="bi-'}${''}${_0x4219x5}${''}${'" href="'}${''}${_0x4219x4}${''}${'" title="'}${''}${_0x4219x5}${''}${'" rel="nofollow noopener" target="_blank"></a></li>'}${''}`)
    }), _0x4219x2.parent().append('<ul class="author-links social color"></ul>'), _0x4219x2.find('li').appendTo(_0x4219x2.parent().find('.author-links')))
}), $w.on('keydown', function (_0x4219x2) {
    pbt.isPost && (_0x4219x2.ctrlKey && 37 == _0x4219x2.keyCode ? (_0x4219x2.preventDefault(), navShortcuts(pbt.isRTL ? '.post-nav-older-link' : '.post-nav-newer-link')) : _0x4219x2.ctrlKey && 39 == _0x4219x2.keyCode && (_0x4219x2.preventDefault(), navShortcuts(pbt.isRTL ? '.post-nav-newer-link' : '.post-nav-older-link')))
}), $('.main-search').each(function () {
    let _0x4219x2 = $(this),
        _0x4219x3 = _0x4219x2.find('input'),
        _0x4219x4 = _0x4219x2.find('button'),
        _0x4219x5 = _0x4219x2.find('.search-results');
    _0x4219x4.on('click', function () {
        getSearch(_0x4219x3, _0x4219x5)
    }), $w.on('keydown', function (_0x4219x2) {
        13 == _0x4219x2.keyCode && getSearch(_0x4219x3, _0x4219x5)
    })
}), $('#related-posts .HTML').each(function () {
    let _0x4219x2 = $(this),
        _0x4219x3 = _0x4219x2.data('shortcode');
    _0x4219x3 && $('.related-wrap').each(function () {
        let _0x4219x4 = $(this),
            _0x4219x5 = _0x4219x4.find('.related-tag'),
            _0x4219x6 = _0x4219x5.data('id'),
            _0x4219x7 = _0x4219x5.data('label'),
            _0x4219x8 = _0x4219x4.find('.widget-content'),
            _0x4219x9 = function _0x4219x2() {
                let _0x4219x4 = getAttr(_0x4219x3, 'results'),
                    _0x4219x5 = _0x4219x4 ? Number(_0x4219x4) + 1 : 4,
                    _0x4219x6 = getAttr(_0x4219x3, 'label');
                return [_0x4219x5, _0x4219x6]
            }(),
            _0x4219xa = _0x4219x9[0],
            _0x4219xb = _0x4219x9[1],
            _0x4219xc = _0x4219xb && _0x4219xb != _0x4219x7 && 'related' != _0x4219xb ? _0x4219xb : _0x4219x7;
        _0x4219xb && _0x4219xb != _0x4219x7 && 'related' != _0x4219xb && _0x4219x8.parent().find('.title-link').attr('href', '/search/label/' + _0x4219xc), $w.on('load resize scroll', function _0x4219x3() {
            $w.scrollTop() + $w.height() >= _0x4219x8.offset().top && ($w.off('load resize scroll', _0x4219x3), getPosts({
                t: _0x4219x8,
                type: 'related',
                num: _0x4219xa,
                label: _0x4219xc,
                id: _0x4219x6
            }), _0x4219x2.parent().remove())
        }).trigger('scroll')
    })
}), $('.blog-post-comments').each(function () {
    let _0x4219x2 = $(this),
        _0x4219x3 = _0x4219x2.data('shortcode');
    getAttr(_0x4219x3, 'type'), _0x4219x2.addClass('blogger-comments visible'), _0x4219x2.find('#top-continue .comment-reply').addClass('btn'), beautiAvatar('.avatar-image-container img');
    let _0x4219x4 = _0x4219x2.find('.comments .comment-reply'),
        _0x4219x5 = _0x4219x2.find('.comments #top-continue'),
        _0x4219x6 = _0x4219x2.find('.show-cf');
    _0x4219x4.on('click', function (_0x4219x3) {
        _0x4219x3.preventDefault(), _0x4219x2.addClass('cf-on'), _0x4219x5.show(), _0x4219x6.remove()
    }), _0x4219x5.on('click', function (_0x4219x2) {
        _0x4219x2.preventDefault(), _0x4219x5.hide()
    }), _0x4219x6.on('click', function () {
        _0x4219x2.addClass('cf-on'), _0x4219x6.remove(), getStickySidebar('.main-wrap, .sidebar-wrap')
    })
}), $(function () {
    $('a#probtemplates').each(function () {
        var _0x4219x2 = $(this),
            _0x4219x3 = 'visibility:visible!important;opacity:1!important;position:relative!important;z-index:1!important;font-size:14px!important;color:var(--footerbar-color)!important;margin:0!important;text-indent:0!important;';
        _0x4219x2.attr('href', 'https://probloggertemplates.com/').text('Premium Blogger Templates').attr('style', 'visibility:visible!important;opacity:1!important;position:relative!important;z-index:1!important;font-size:14px!important;color:var(--accent-color)!important;margin:0!important;text-indent:0!important;'), _0x4219x2.parent().attr('style', _0x4219x3).parent().attr('style', _0x4219x3)
    }), setInterval(function () {
        $('a#probtemplates').length && $('a#probtemplates:visible').length || (window.location.href = 'https://probloggertemplates.com/')
    }, 1e3), $('.entry-thumbnail .thumbnail, .entry-avatar .avatar').not('.pbt-lazy').pbtLazy(), $('.header-inner').each(function () {
        let _0x4219x2 = $(this);
        if (!0 == pbt.stickyMenu && _0x4219x2.length > 0) {
            let _0x4219x3 = $(document).scrollTop(),
                _0x4219x4 = _0x4219x2.offset().top,
                _0x4219x5 = _0x4219x2.height(),
                _0x4219x6 = _0x4219x4 + 2 * _0x4219x5;
            $w.scroll(function () {
                let _0x4219x4 = $(document).scrollTop(),
                    _0x4219x5 = _0x4219x2.offset().top,
                    _0x4219x7 = $('.main-header').offset().top + 1;
                _0x4219x4 > _0x4219x6 ? _0x4219x2.addClass('is-fixed') : _0x4219x5 <= _0x4219x7 && _0x4219x2.removeClass('is-fixed').removeClass('show'), _0x4219x4 < _0x4219x3 ? setTimeout(function () {
                    _0x4219x5 >= _0x4219x7 && _0x4219x2.addClass('show')
                }, 170) : setTimeout(function () {
                    _0x4219x2.removeClass('show')
                }, 170), _0x4219x3 = _0x4219x4
            })
        }
    }), $('.mobile-logo').each(function () {
        let _0x4219x2 = $(this),
            _0x4219x3 = $('.main-logo a').clone();
        _0x4219x3.find('h1').remove(), _0x4219x3.appendTo(_0x4219x2)
    }), $('#mobile-menu').each(function () {
        let _0x4219x2 = $(this),
            _0x4219x3 = $('.main-nav').clone();
        _0x4219x3.attr('class', 'mobile-nav').attr('id', 'mobile-nav'), _0x4219x3.appendTo(_0x4219x2), $('.mobile-menu-toggle, .hide-mobile-menu').on('click', function () {
            $b.toggleClass('menu-on'), $('.menu-on .overlay-bg').on('click', function () {
                $b.removeClass('menu-on')
            })
        }), $('.mobile-menu .has-sub > a').on('click', function (_0x4219x2) {
            _0x4219x2.preventDefault();
            let _0x4219x3 = $(this);
            _0x4219x3.parent().hasClass('expanded') ? _0x4219x3.parent().removeClass('expanded').children('.sub-menu').slideToggle(170) : _0x4219x3.parent().addClass('expanded').children('.sub-menu').slideToggle(170)
        })
    }), $('.mm-footer').each(function () {
        let _0x4219x2 = $(this),
            _0x4219x3 = $('.about-section .LinkList .social-icons'),
            _0x4219x4 = $('#footer-menu .link-list'),
            _0x4219x5 = !!_0x4219x3.length && _0x4219x3.clone();
        !1 != _0x4219x5 && (_0x4219x5.attr('class', 'social-icons social color').find('.text').remove(), _0x4219x2.append(_0x4219x5));
        let _0x4219x6 = !!_0x4219x4.length && _0x4219x4.clone();
        !1 != _0x4219x6 && _0x4219x2.append(_0x4219x6)
    }), $('#load-more').each(function () {
        let _0x4219x2 = $(this),
            _0x4219x3 = $('.blog-pager .loading'),
            _0x4219x4 = 'visible',
            _0x4219x5 = _0x4219x2.data('url');
        _0x4219x2.on('click', function (_0x4219x6) {
            _0x4219x6.preventDefault(), _0x4219x2.removeClass(_0x4219x4), $.ajax({
                url: _0x4219x5,
                beforeSend: function () {
                    _0x4219x3.addClass(_0x4219x4)
                },
                success: function (_0x4219x3) {
                    let _0x4219x6 = $(_0x4219x3).find('.blog-posts');
                    _0x4219x6.find('.post').addClass('fadeInUp'), $('.blog-posts').append(_0x4219x6.html()), (_0x4219x5 = $(_0x4219x3).find('#load-more').data('url')) ? _0x4219x2.addClass(_0x4219x4) : (_0x4219x2.removeClass(_0x4219x4), $('.blog-pager .no-more').addClass(_0x4219x4))
                },
                complete: function () {
                    _0x4219x3.removeClass(_0x4219x4), getStickySidebar('.main-wrap, .sidebar-wrap'), $('.blog-posts .thumbnail').not('.pbt-lazy').pbtLazy()
                }
            })
        })
    }), $('p.comment-content').each(function () {
        let _0x4219x2 = $(this);
        $w.on('load resize scroll', function _0x4219x3() {
            $w.scrollTop() + $w.height() >= _0x4219x2.offset().top && ($w.off('load resize scroll', _0x4219x3), _0x4219x2.replaceText(/\{image\}([^\}]*)\{\/image\}/g, '<img src="$1" alt="Comment image"/>'), _0x4219x2.replaceText(/\{video\}([^\}]*)\{\/video\}/g, '<span class="comment-video-url">$1</span>'), _0x4219x2.find('.comment-video-url').each(function () {
                var _0x4219x2;
                let _0x4219x3 = $(this),
                    _0x4219x4 = _0x4219x3.text(),
                    _0x4219x5, _0x4219x6, _0x4219x7, _0x4219x8;
                _0x4219x3.replaceWith((_0x4219x2 = _0x4219x4, _0x4219x5 = new URL(_0x4219x2), _0x4219x6 = new URLSearchParams(_0x4219x5.search), (_0x4219x8 = (_0x4219x7 = !!_0x4219x2.match('youtube.com') && _0x4219x6.get('v')) || !!_0x4219x2.match('youtu.be') && _0x4219x5.pathname.replace('/', '')) ? `${''}${'<div class="comment-video yt-img" data-id="'}${''}${_0x4219x8}${''}${'"><img width="100%" height="315" src="https://i.ytimg.com/vi/'}${''}${_0x4219x8}${''}${'/hqdefault.jpg" alt="YouTube video thumbnail"/></div>'}${''}` : 'Error: ' + pbt.noResults))
            }), _0x4219x2.find('.comment-video').each(function () {
                let _0x4219x2 = $(this),
                    _0x4219x3 = _0x4219x2.data('id');
                _0x4219x2.on('click', function () {
                    _0x4219x2.replaceWith(`${''}${'<iframe width="100%" height="315" src="https://www.youtube.com/embed/'}${''}${_0x4219x3}${''}${'" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'}${''}`)
                })
            }))
        }).trigger('scroll')
    }), getStickySidebar('.main-wrap, .sidebar-wrap'), $('.back-top').each(function () {
        let _0x4219x2 = $(this);
        $w.on('scroll', function () {
            $(this).scrollTop() >= 100 ? _0x4219x2.addClass('show') : _0x4219x2.removeClass('show'), _0x4219x2.offset().top >= $('.site-footer').offset().top - 36 ? _0x4219x2.addClass('on-footer') : _0x4219x2.removeClass('on-footer')
        }), _0x4219x2.on('click', function () {
            $('html, body').animate({
                scrollTop: 0
            }, 500)
        })
    })
})
