/* jQuery Superfish Menu Plugin - v1.7.7 - adds dropdown menu and megamenu support
 * http://users.tpg.com.au/j_birch/plugins/superfish/
 * Copyright (c) 2013 Joel Birch. Dual licensed under the MIT and GPL licenses.
 */
;(function( e, s ) {
  'use strict';
  var o = function() {
    var o = { bcClass: 'sf-breadcrumb', menuClass: 'sf-js-enabled', anchorClass: 'sf-with-ul', menuArrowClass: 'sf-arrows' }, n = function() {
      var s = /^(?![\w\W]*Windows Phone)[\w\W]*(iPhone|iPad|iPod)/i.test( navigator.userAgent );
      return s && e( 'html' ).css( 'cursor', 'pointer' ).on( 'click', e.noop ), s;
    }(), t = function() {
      var e = document.documentElement.style;
      return 'behavior' in e && 'fill' in e && /iemobile/i.test( navigator.userAgent );
    }(), i = function() {return ! ! s.PointerEvent;}(), r = function( e, s ) {
      var n = o.menuClass;
      s.cssArrows && (n += ' ' + o.menuArrowClass), e.toggleClass( n );
    }, a = function( s, n ) {
      return s.find( 'li.' + n.pathClass ).
          slice( 0, n.pathLevels ).
          addClass( n.hoverClass + ' ' + o.bcClass ).
          filter( function() {return e( this ).children( n.popUpSelector ).hide().show().length;} ).
          removeClass( n.pathClass );
    }, l = function( e ) {e.children( 'a' ).toggleClass( o.anchorClass );}, h = function( e ) {
      var s = e.css( 'ms-touch-action' ), o = e.css( 'touch-action' );
      o = o || s, o = 'pan-y' === o ? 'auto' : 'pan-y', e.css( { 'ms-touch-action': o, 'touch-action': o } );
    }, u = function( s, o ) {
      var r = 'li:has(' + o.popUpSelector + ')';
      e.fn.hoverIntent && ! o.disableHI ? s.hoverIntent( c, f, r ) : s.on( 'mouseenter.superfish', r, c ).on( 'mouseleave.superfish', r, f );
      var a = 'MSPointerDown.superfish';
      i && (a = 'pointerdown.superfish'), n || (a += ' touchend.superfish'), t && (a += ' mousedown.superfish'), s.on( 'focusin.superfish', 'li', c ).
          on( 'focusout.superfish', 'li', f ).
          on( a, 'a', o, p );
    }, p = function( s ) {
      var o = e( this ), n = m( o ), t = o.siblings( s.data.popUpSelector );
      return n.onHandleTouch.call( t ) === ! 1 ? this : (t.length > 0 && t.is( ':hidden' ) &&
      (o.one( 'click.superfish', ! 1 ), 'MSPointerDown' === s.type || 'pointerdown' === s.type ? o.trigger( 'focus' ) : e.proxy( c, o.parent( 'li' ) )()), void 0);
    }, c = function() {
      var s = e( this ), o = m( s );
      clearTimeout( o.sfTimer ), s.siblings().superfish( 'hide' ).end().superfish( 'show' );
    }, f = function() {
      var s = e( this ), o = m( s );
      n ? e.proxy( d, s, o )() : (clearTimeout( o.sfTimer ), o.sfTimer = setTimeout( e.proxy( d, s, o ), o.delay ));
    }, d = function( s ) {
      s.retainPath = e.inArray( this[ 0 ], s.$path ) > - 1, this.superfish( 'hide' ), this.parents( '.' + s.hoverClass ).length ||
      (s.onIdle.call( v( this ) ), s.$path.length && e.proxy( c, s.$path )());
    }, v = function( e ) {return e.closest( '.' + o.menuClass );}, m = function( e ) {return v( e ).data( 'sf-options' );};
    return {
      hide: function( s ) {
        if ( this.length ) {
          var o = this, n = m( o );
          if ( ! n ) return this;
          var t = n.retainPath === ! 0 ? n.$path : '', i = o.find( 'li.' + n.hoverClass ).add( this ).not( t ).removeClass( n.hoverClass ).children( n.popUpSelector ),
              r = n.speedOut;
          if ( s && (i.show(), r = 0), n.retainPath = ! 1, n.onBeforeHide.call( i ) === ! 1 ) return this;
          i.stop( ! 0, ! 0 ).animate( n.animationOut, r, function() {
            var s = e( this );
            n.onHide.call( s );
          } );
        }
        return this;
      }, show: function() {
        var e = m( this );
        if ( ! e ) return this;
        var s = this.addClass( e.hoverClass ), o = s.children( e.popUpSelector );
        return e.onBeforeShow.call( o ) === ! 1 ? this : (o.stop( ! 0, ! 0 ).animate( e.animation, e.speed, function() {e.onShow.call( o );} ), this);
      }, destroy: function() {
        return this.each( function() {
          var s, n = e( this ), t = n.data( 'sf-options' );
          return t ? (s = n.find( t.popUpSelector ).parent( 'li' ), clearTimeout( t.sfTimer ), r( n, t ), l( s ), h( n ), n.off( '.superfish' ).off( '.hoverIntent' ), s.children(
              t.popUpSelector ).attr( 'style', function( e, s ) {return s.replace( /display[^;]+;?/g, '' );} ), t.$path.removeClass( t.hoverClass + ' ' + o.bcClass ).
              addClass( t.pathClass ), n.find( '.' + t.hoverClass ).removeClass( t.hoverClass ), t.onDestroy.call( n ), n.removeData( 'sf-options' ), void 0) : ! 1;
        } );
      }, init: function( s ) {
        return this.each( function() {
          var n = e( this );
          if ( n.data( 'sf-options' ) ) return ! 1;
          var t = e.extend( {}, e.fn.superfish.defaults, s ), i = n.find( t.popUpSelector ).parent( 'li' );
          t.$path = a( n, t ), n.data( 'sf-options', t ), r( n, t ), l( i ), h( n ), u( n, t ), i.not( '.' + o.bcClass ).superfish( 'hide', ! 0 ), t.onInit.call( this );
        } );
      }
    };
  }();
  e.fn.superfish = function( s ) {
    return o[ s ] ? o[ s ].apply( this, Array.prototype.slice.call( arguments, 1 ) ) : 'object' != typeof s && s ? e.error( 'Method ' + s +
        ' does not exist on jQuery.fn.superfish' ) : o.init.apply( this, arguments );
  }, e.fn.superfish.defaults = {
    popUpSelector: 'ul,.sf-mega',
    hoverClass: 'sfHover',
    pathClass: 'overrideThisToUse',
    pathLevels: 1,
    delay: 800,
    animation: { opacity: 'show' },
    animationOut: { opacity: 'hide' },
    speed: 'normal',
    speedOut: 'fast',
    cssArrows: ! 0,
    disableHI: ! 1,
    onInit: e.noop,
    onBeforeShow: e.noop,
    onShow: e.noop,
    onBeforeHide: e.noop,
    onHide: e.noop,
    onIdle: e.noop,
    onDestroy: e.noop,
    onHandleTouch: e.noop
  };
})( jQuery, window );