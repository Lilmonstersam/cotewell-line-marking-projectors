(function () {
  var header = document.querySelector('[data-header]');
  var hero = document.querySelector('.product-hero');
  var stickyCta = document.querySelector('[data-sticky-cta]');
  var stickyLabel = document.querySelector('[data-sticky-label]');
  var stickyAdd = document.querySelector('[data-sticky-add]');
  var quantity = document.querySelector('[data-quantity]');
  var quantityDown = document.querySelector('[data-quantity-down]');
  var quantityUp = document.querySelector('[data-quantity-up]');
  var addToCart = document.querySelector('[data-add-to-cart]');
  var cartCount = document.querySelector('[data-cart-count]');
  var cartLink = document.querySelector('[data-cart-link]');
  var confirmation = document.querySelector('[data-cart-confirmation]');
  var views = Array.prototype.slice.call(document.querySelectorAll('[data-view]'));
  var contextLink = document.querySelector('[data-context-link]');
  var headerCta = document.querySelector('[data-header-cta]');
  var footerLabel = document.querySelector('[data-footer-label]');
  var description = document.querySelector('meta[name="description"]');
  var canonical = document.querySelector('link[rel="canonical"]');
  var ogTitle = document.querySelector('meta[property="og:title"]');
  var ogDescription = document.querySelector('meta[property="og:description"]');
  var ogUrl = document.querySelector('meta[property="og:url"]');
  var ogImage = document.querySelector('meta[property="og:image"]');
  var productMedia = document.querySelector('[data-product-media]');
  var productImage = document.querySelector('[data-product-image]');
  var productTitle = document.querySelector('[data-product-title]');
  var featureGrid = document.querySelector('[data-feature-grid]');
  var installationNotes = document.querySelector('[data-installation-notes]');
  var applications = document.querySelector('[data-applications]');
  var relatedGrid = document.querySelector('[data-related-grid]');
  var activeView = 'category';
  var activeProduct = null;
  var lastY = 0;
  var ticking = false;

  var categoryData = {
    title: 'Line Marking & Safety Sign Projectors | Cotewell',
    description: 'Shop industrial projectors for internal line marking, safety signs and visual warnings, including flexible options for sites with changing layouts.',
    canonical: 'https://cotewell.com.au/product-category/line-marking-projector/',
    image: 'assets/img/delta-fieldlas-projector.png',
    contextHref: '#projector-products',
    contextText: 'All products',
    ctaHref: '#projector-products',
    ctaText: 'View projectors',
    footerText: 'Line marking & safety sign projectors mock-up'
  };

  var productData = {
    'delta-fieldlas': {
      shortName: 'Delta FieldLAS',
      breadcrumb: 'Delta FieldLAS',
      title: 'Delta FieldLAS Laser Line Marking Projector | Cotewell',
      descriptionMeta: 'Create bright, adjustable internal floor lines with Delta FieldLAS, a flexible laser line marking projector for changing industrial sites.',
      canonical: 'https://cotewell.com.au/product/delta-fieldlas-line-marking-projector-2/',
      eyebrow: 'Industrial line marking projector',
      titleHtml: 'Delta FieldLAS<br><em>Laser Line Marking</em><br>Projector',
      longTitle: false,
      description: 'The Delta FieldLAS is a high-performance industrial laser system that creates bright, highly visible internal floor lines without the ongoing maintenance of traditional paint or floor tape.',
      descriptionSecondary: 'As layouts change, its adjustable projection and 360° mounting make line positions easier to update than replacing floor tape or repainting.',
      image: 'assets/img/delta-fieldlas-projector.png',
      imageAlt: 'Delta FieldLAS laser line marking projector',
      imageWidth: 1174,
      imageHeight: 1110,
      imageTag: 'IP67 industrial enclosure',
      mediaClass: '',
      purchaseLabel: 'Unit price',
      purchaseValue: '$2,400.00',
      purchaseSuffix: '+ GST',
      purchaseNote: 'Before purchasing, call <a href="tel:1300590505">1300 590 505</a> so we can discuss your application and options.',
      stickyText: 'Delta FieldLAS · $2,400.00 + GST',
      featuresTitle: 'Flexible lines for<br>changing industrial sites.',
      featuresIntro: 'Every application is customised to suit the environment. Contact us before purchase so we can plan the projector, line position and installation.',
      features: [
        ['Latest diode laser technology', 'Brighter, sharper and more consistent line projection.'],
        ['Adjustable projection', 'Update the line length and thickness to suit changing site requirements.'],
        ['Long-lasting laser source', 'A durable diode source designed for improved reliability.'],
        ['IP67-rated enclosure', 'Built for dusty, dirty and wet industrial environments.'],
        ['Quick installation', 'No operational downtime is required during installation.'],
        ['360° adjustable mounting', 'Reposition the projected line with precision as the layout evolves.']
      ],
      notes: [
        'Not suitable for applications in full sunlight',
        'Hard wiring must be completed by a qualified electrician',
        'Technical data sheet available on request'
      ],
      applications: [
        'Pedestrian walkways and forklift traffic separation',
        'Dusty, dirty or wet environments',
        'Cold storage and freezer facilities',
        'High-risk industrial work areas'
      ],
      related: ['signum-75w', 'signum-50w', 'mightyline']
    },
    'signum-75w': {
      shortName: 'Signum 75W',
      breadcrumb: 'Signum 75W',
      title: 'Signum 75W Safety Sign Projector | Cotewell',
      descriptionMeta: 'Project safety lines, warning signs and customised symbols with the Signum 75W projector, designed for changing industrial layouts.',
      canonical: 'https://cotewell.com.au/product/signum-projected-safety-marking-75w/',
      eyebrow: 'Projected safety marking · 75W',
      titleHtml: 'Signum<br><em>Projected Safety</em><br>Marking – 75W',
      longTitle: true,
      description: 'The Italian-made Signum 75W projects bright, highly visible safety lines, warning signs and customised symbols without the ongoing maintenance of traditional floor markings.',
      descriptionSecondary: 'It is easy to reposition or update when a layout changes, so visual guidance can move with operations instead of requiring replacement tape or repainting.',
      image: 'assets/img/signum-safety-projector.png',
      imageAlt: 'Signum Projected Safety Marking 75W projector',
      imageWidth: 1118,
      imageHeight: 728,
      imageTag: '75W · IP65 protection',
      mediaClass: 'product-media--signum',
      purchaseLabel: 'Unit price',
      purchaseValue: '$3,200.00',
      purchaseSuffix: '+ GST',
      purchaseNote: 'Each projector requires a GOBO. Call <a href="tel:1300590505">1300 590 505</a> before purchase to discuss GOBO options and arrange a free site inspection.',
      stickyText: 'Signum 75W · $3,200.00 + GST',
      featuresTitle: 'Built to change<br>with your workplace.',
      featuresIntro: 'We customise every projection system for the workplace layout and application. Contact us before purchase so we can plan the sign, mounting position and installation.',
      features: [
        ['Easy to reposition or update', 'Move or update the projection when your site layout changes.'],
        ['Customised signs and symbols', 'Choose safety content designed around your workplace requirements.'],
        ['Projects onto any surface', 'Visible guidance that will not wear under daily operations.'],
        ['50,000-hour LED lifespan', 'Long service life, with reduced output beyond the rated period.'],
        ['IP65 protection', 'Designed for harsh industrial environments and temperature extremes.'],
        ['Five-year warranty', 'Long-term support for the projector system.']
      ],
      notes: [
        'Not suitable for applications in full sunlight',
        'Hard wiring must be completed by a qualified electrician',
        'Every projection system is customised for the workplace',
        'Technical data sheet available on request'
      ],
      applications: [
        'Sites where layouts may change over time',
        'Warehouses with heavy forklift traffic',
        'Dusty, dirty or high-wear environments',
        'High-risk areas with forklift and pedestrian traffic'
      ],
      related: ['signum-50w', 'delta-fieldlas', 'mightyline']
    },
    'signum-50w': {
      shortName: 'Signum 50W',
      breadcrumb: 'Signum 50W',
      title: 'Signum 50W Safety Sign Projector | Cotewell',
      descriptionMeta: 'Project safety lines, warning signs and customised symbols with the Signum 50W projector, designed for changing industrial layouts.',
      canonical: 'https://cotewell.com.au/product/signum-projected-safety-marking-50w/',
      eyebrow: 'Projected safety marking · 50W',
      titleHtml: 'Signum<br><em>Projected Safety</em><br>Marking – 50W',
      longTitle: true,
      description: 'The Italian-made Signum 50W projects bright, highly visible safety lines, warning signs and customised symbols without the ongoing maintenance of traditional floor markings.',
      descriptionSecondary: 'It is easy to reposition or update when a layout changes, making it a flexible alternative to replacing floor tape or repainting safety guidance.',
      image: 'assets/img/signum-50w.png',
      imageAlt: 'Signum Projected Safety Marking 50W projector',
      imageWidth: 610,
      imageHeight: 500,
      imageTag: '50W · IP65 protection',
      mediaClass: 'product-media--signum',
      purchaseLabel: 'Unit price',
      purchaseValue: '$2,250.00',
      purchaseSuffix: '+ GST',
      purchaseNote: 'Each projector requires a GOBO. Call <a href="tel:1300590505">1300 590 505</a> before purchase to discuss GOBO options and arrange a free site inspection.',
      stickyText: 'Signum 50W · $2,250.00 + GST',
      featuresTitle: 'Built to change<br>with your workplace.',
      featuresIntro: 'We customise every projection system for the workplace layout and application. Contact us before purchase so we can plan the sign, mounting position and installation.',
      features: [
        ['Easy to reposition or update', 'Move or update the projection when your site layout changes.'],
        ['Customised signs and symbols', 'Choose safety content designed around your workplace requirements.'],
        ['Projects onto any surface', 'Visible guidance that will not wear under daily operations.'],
        ['50,000-hour LED lifespan', 'Long service life, with reduced output beyond the rated period.'],
        ['IP65 protection', 'Designed for harsh industrial environments and temperature extremes.'],
        ['Five-year warranty', 'Long-term support for the projector system.']
      ],
      notes: [
        'Not suitable for applications in full sunlight',
        'Hard wiring must be completed by a qualified electrician',
        'Every projection system is customised for the workplace',
        'Technical data sheet available on request'
      ],
      applications: [
        'Sites where layouts may change over time',
        'Warehouses with heavy forklift traffic',
        'Dusty, dirty or high-wear environments',
        'High-risk areas with forklift and pedestrian traffic'
      ],
      related: ['signum-75w', 'delta-fieldlas', 'mightyline']
    }
  };

  var relatedCatalogue = {
    'delta-fieldlas': {
      href: '#delta-fieldlas',
      route: 'delta-fieldlas',
      image: 'assets/img/delta-fieldlas-projector.png',
      alt: 'Delta FieldLAS laser line marking projector',
      type: 'Internal laser line marking',
      title: 'Delta FieldLAS Laser Line Marking Projector',
      description: 'Creates adjustable internal floor lines for walkways, traffic separation and high-risk areas.'
    },
    'signum-75w': {
      href: '#signum-75w',
      route: 'signum-75w',
      image: 'assets/img/signum-safety-projector.png',
      alt: 'Signum 75W projected safety marking system',
      type: 'Projected safety marking',
      title: 'Signum Projected Safety Marking – 75W',
      description: 'Projects safety lines, warning signs and customised symbols for industrial sites.'
    },
    'signum-50w': {
      href: '#signum-50w',
      route: 'signum-50w',
      image: 'assets/img/signum-50w.png',
      alt: 'Signum 50W projected safety marking system',
      type: 'Projected safety marking',
      title: 'Signum Projected Safety Marking – 50W',
      description: 'Flexible safety guidance that can be repositioned as workplace layouts change.'
    },
    mightyline: {
      href: 'https://cotewell.com.au/product/mighty-line-marking-tape/',
      image: 'assets/img/mightyline-marking-tape.jpg',
      alt: 'MightyLine marking tape',
      type: 'Heavy-duty floor tape',
      title: 'MightyLine Marking Tape',
      description: 'A durable, low-maintenance alternative to painted lines in busy industrial workplaces.'
    }
  };

  var productKeys = Object.keys(productData);
  var sectionNames = ['buy', 'features', 'projects', 'related-products'];

  function routeFromHash() {
    var hash = window.location.hash.replace(/^#/, '');
    var matchedProduct = null;
    var matchedSection = null;

    productKeys.some(function (key) {
      if (hash === key) {
        matchedProduct = key;
        return true;
      }

      var prefix = key + '-';
      if (hash.indexOf(prefix) === 0) {
        var possibleSection = hash.slice(prefix.length);
        if (sectionNames.indexOf(possibleSection) !== -1) {
          matchedProduct = key;
          matchedSection = possibleSection;
          return true;
        }
      }
      return false;
    });

    return matchedProduct
      ? { view: 'product', product: matchedProduct, section: matchedSection }
      : { view: 'category', product: null, section: null };
  }

  function setText(selector, value) {
    var element = document.querySelector(selector);
    if (element) element.textContent = value;
  }

  function setMeta(element, value) {
    if (element) element.setAttribute('content', value);
  }

  function renderList(target, items) {
    if (!target) return;
    target.innerHTML = items.map(function (item) { return '<li>' + item + '</li>'; }).join('');
  }

  function renderFeatures(items) {
    if (!featureGrid) return;
    featureGrid.innerHTML = items.map(function (item, index) {
      return '<article class="feature"><span>' + String(index + 1).padStart(2, '0') + '</span><h3>' + item[0] + '</h3><p>' + item[1] + '</p></article>';
    }).join('');
  }

  function renderRelated(items) {
    if (!relatedGrid) return;
    relatedGrid.innerHTML = items.map(function (key) {
      var item = relatedCatalogue[key];
      var routeAttribute = item.route ? ' data-product-route="' + item.route + '"' : '';
      return '<a class="related-product" href="' + item.href + '"' + routeAttribute + '>' +
        '<div class="related-product__media"><img src="' + item.image + '" alt="' + item.alt + '" loading="lazy"></div>' +
        '<div class="related-product__copy"><p class="mono">' + item.type + '</p><h3>' + item.title + '</h3><p>' + item.description + '</p><span class="text-link text-link--dark">View product</span></div>' +
      '</a>';
    }).join('');
  }

  function applyProduct(key) {
    var product = productData[key];
    if (!product) return;

    setText('[data-product-breadcrumb]', product.breadcrumb);
    setText('[data-product-eyebrow]', product.eyebrow);
    setText('[data-product-tag]', product.imageTag);
    setText('[data-product-description]', product.description);
    setText('[data-product-description-secondary]', product.descriptionSecondary);
    setText('[data-purchase-label]', product.purchaseLabel);
    setText('[data-purchase-value]', product.purchaseValue);
    setText('[data-features-intro]', product.featuresIntro);

    if (productTitle) {
      productTitle.innerHTML = product.titleHtml;
      productTitle.classList.toggle('is-long', product.longTitle);
    }
    if (productImage) {
      productImage.src = product.image;
      productImage.alt = product.imageAlt;
      productImage.width = product.imageWidth;
      productImage.height = product.imageHeight;
    }
    if (productMedia) {
      productMedia.classList.remove('product-media--signum');
      if (product.mediaClass) productMedia.classList.add(product.mediaClass);
    }

    var suffix = document.querySelector('[data-purchase-suffix]');
    if (suffix) {
      suffix.textContent = product.purchaseSuffix;
      suffix.hidden = !product.purchaseSuffix;
    }

    var purchaseNote = document.querySelector('[data-purchase-note]');
    if (purchaseNote) purchaseNote.innerHTML = product.purchaseNote;

    var featuresTitle = document.querySelector('[data-features-title]');
    if (featuresTitle) featuresTitle.innerHTML = product.featuresTitle;

    renderFeatures(product.features);
    renderList(installationNotes, product.notes);
    renderList(applications, product.applications);
    renderRelated(product.related);

    if (confirmation) confirmation.hidden = true;
    if (quantity) quantity.value = '1';
    if (stickyLabel) stickyLabel.textContent = product.stickyText;
    if (stickyCta) stickyCta.setAttribute('aria-label', product.shortName + ' quick purchase');
    if (stickyAdd) stickyAdd.href = '#' + key + '-buy';
  }

  function renderRoute() {
    var route = routeFromHash();
    var routeChanged = route.view !== activeView || route.product !== activeProduct;
    var page = route.view === 'product' ? productData[route.product] : categoryData;

    activeView = route.view;
    activeProduct = route.product;

    views.forEach(function (view) {
      view.hidden = view.getAttribute('data-view') !== route.view;
    });

    if (route.view === 'product') applyProduct(route.product);

    document.title = page.title;
    if (description) description.setAttribute('content', page.descriptionMeta || page.description);
    if (canonical) canonical.setAttribute('href', page.canonical);
    setMeta(ogTitle, page.title);
    setMeta(ogDescription, page.descriptionMeta || page.description);
    setMeta(ogUrl, page.canonical);
    setMeta(ogImage, page.image || categoryData.image);

    if (contextLink) {
      contextLink.href = route.view === 'product' ? '#' + route.product + '-features' : categoryData.contextHref;
      contextLink.textContent = route.view === 'product' ? 'Product details' : categoryData.contextText;
    }
    if (headerCta) {
      headerCta.href = route.view === 'product' ? '#' + route.product + '-buy' : categoryData.ctaHref;
      headerCta.textContent = route.view === 'product' ? 'Add to cart' : categoryData.ctaText;
    }
    if (footerLabel) {
      footerLabel.textContent = route.view === 'product' ? page.shortName + ' product page mock-up' : categoryData.footerText;
    }

    if (stickyCta && route.view !== 'product') {
      stickyCta.classList.remove('is-visible');
      stickyCta.setAttribute('aria-hidden', 'true');
    }

    if (route.section) {
      requestAnimationFrame(function () {
        var section = document.getElementById(route.section);
        if (section) section.scrollIntoView({ behavior: routeChanged ? 'auto' : 'smooth' });
      });
    } else if (routeChanged) {
      requestAnimationFrame(function () { window.scrollTo({ top: 0, behavior: 'auto' }); });
    }

    requestAnimationFrame(updatePageUi);
  }

  function normaliseQuantity(value) {
    var parsed = parseInt(value, 10);
    if (!Number.isFinite(parsed)) parsed = 1;
    return Math.max(1, Math.min(99, parsed));
  }

  function changeQuantity(change) {
    if (!quantity) return;
    quantity.value = normaliseQuantity(Number(quantity.value) + change);
  }

  if (quantityDown) quantityDown.addEventListener('click', function () { changeQuantity(-1); });
  if (quantityUp) quantityUp.addEventListener('click', function () { changeQuantity(1); });
  if (quantity) quantity.addEventListener('change', function () { quantity.value = normaliseQuantity(quantity.value); });

  if (addToCart) {
    addToCart.addEventListener('click', function () {
      var added = normaliseQuantity(quantity ? quantity.value : 1);
      var existing = parseInt(cartCount ? cartCount.textContent : '0', 10) || 0;
      var total = existing + added;
      var productName = activeProduct && productData[activeProduct] ? productData[activeProduct].shortName : 'Projector';

      if (cartCount) cartCount.textContent = String(total);
      if (cartLink) cartLink.setAttribute('aria-label', 'Cart, ' + total + (total === 1 ? ' item' : ' items'));
      if (confirmation) {
        confirmation.hidden = false;
        confirmation.textContent = added + ' × ' + productName + ' added to the mock-up cart.';
      }
    });
  }

  function updatePageUi() {
    ticking = false;
    var y = window.scrollY || 0;

    if (header) header.classList.toggle('is-hidden', y > lastY && y > 180);

    if (hero && stickyCta) {
      var show = activeView === 'product' && hero.getBoundingClientRect().bottom <= 0;
      stickyCta.classList.toggle('is-visible', show);
      stickyCta.setAttribute('aria-hidden', String(!show));
    }

    lastY = y;
  }

  window.addEventListener('scroll', function () {
    if (!ticking) {
      ticking = true;
      requestAnimationFrame(updatePageUi);
    }
  }, { passive: true });

  window.addEventListener('hashchange', renderRoute);

  Array.prototype.slice.call(document.querySelectorAll('[data-category-link]')).forEach(function (link) {
    link.addEventListener('click', function () {
      if (activeView === 'category' && window.location.hash === '#category') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    });
  });

  renderRoute();

  var revealItems = Array.prototype.slice.call(document.querySelectorAll('.reveal'));
  if ('IntersectionObserver' in window) {
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { rootMargin: '0px 0px -8% 0px', threshold: 0.08 });
    revealItems.forEach(function (item) { observer.observe(item); });
  } else {
    revealItems.forEach(function (item) { item.classList.add('is-visible'); });
  }
})();
