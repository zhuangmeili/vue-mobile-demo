/**
 * @file mixin 监听滚动
 * @author
 */

export default {
  mounted () {
    const inBrowser = typeof window !== 'undefined';
    if (inBrowser) {
      this.$bindScroll();
    }
  },
  methods: {
    $bindScroll () {
      this._handleScroll = (e) => {
        if (this.onScroll) this.onScroll();
      };
      window.addEventListener('scroll', this._handleScroll);
    },
    $unbindScroll (scroller) {
      if (this._handleScroll) window.removeEventListener('scroll', this._handleScroll);
    }
  },
  beforeDestroy () {
    this.$unbindScroll();
  }
}; // eslint-disable-line
