/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/showcase/block.json"
/*!*********************************!*\
  !*** ./src/showcase/block.json ***!
  \*********************************/
(module) {

module.exports = /*#__PURE__*/JSON.parse('{"$schema":"https://schemas.wp.org/trunk/block.json","apiVersion":3,"name":"create-block/showcase","version":"0.1.0","title":"Product Showcase","category":"widgets","icon":"star-filled","description":"Display product information with rating, carousel, and features","example":{},"attributes":{"topSectionText":{"type":"string","default":"Best for Combo Sleepers"},"rating":{"type":"number","default":4.8},"carouselImages":{"type":"array","default":[]},"serviceName":{"type":"string","default":""},"featureTags":{"type":"array","default":[]},"features":{"type":"array","default":[]},"specialOfferTitle":{"type":"string","default":""},"specialOfferDescription":{"type":"string","default":""},"specialOfferUrl":{"type":"string","default":""},"primaryButtonText":{"type":"string","default":"View Packages"},"primaryButtonUrl":{"type":"string","default":""},"phoneButtonText":{"type":"string","default":"Call Now"},"phoneNumber":{"type":"string","default":""},"videoButtonText":{"type":"string","default":"Watch Video Review"},"videoButtonUrl":{"type":"string","default":""},"reviewButtonText":{"type":"string","default":"Read Full Review"},"reviewButtonUrl":{"type":"string","default":""},"tabs":{"type":"array","default":[{"title":"Overview","content":""},{"title":"Features","content":""},{"title":"Details","content":""}]}},"supports":{"html":false,"align":["wide","full"]},"textdomain":"showcase","editorScript":"file:./index.js","editorStyle":"file:./index.css","style":"file:./style-index.css","render":"file:./render.php","viewScript":"file:./view.js"}');

/***/ },

/***/ "./src/showcase/edit.js"
/*!******************************!*\
  !*** ./src/showcase/edit.js ***!
  \******************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Edit)
/* harmony export */ });
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _editor_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./editor.scss */ "./src/showcase/editor.scss");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__);






/**
 * Star Rating Component
 * Displays star rating based on numeric score (0.1-5.0)
 */

function StarRating({
  rating
}) {
  const fullStars = Math.floor(rating);
  const hasPartialStar = rating % 1 !== 0;
  const partialStarPercent = rating % 1 * 100;
  const emptyStars = 5 - Math.ceil(rating);
  const starPath = "M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z";
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
    className: "showcase-star-rating",
    "aria-label": `${rating} out of 5 stars`,
    children: [[...Array(fullStars)].map((_, i) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("svg", {
      width: "20",
      height: "20",
      viewBox: "0 0 24 24",
      className: "star star-full",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("path", {
        d: starPath,
        fill: "currentColor"
      })
    }, `full-${i}`)), hasPartialStar && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("svg", {
      width: "20",
      height: "20",
      viewBox: "0 0 24 24",
      className: "star star-partial",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("defs", {
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("linearGradient", {
          id: `star-gradient-${rating}`,
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("stop", {
            offset: `${partialStarPercent}%`,
            stopColor: "currentColor"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("stop", {
            offset: `${partialStarPercent}%`,
            stopColor: "#e0e0e0"
          })]
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("path", {
        d: starPath,
        fill: `url(#star-gradient-${rating})`
      })]
    }, "partial"), [...Array(emptyStars)].map((_, i) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("svg", {
      width: "20",
      height: "20",
      viewBox: "0 0 24 24",
      className: "star star-empty",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("path", {
        d: starPath,
        fill: "#e0e0e0"
      })
    }, `empty-${i}`))]
  });
}

/**
 * Carousel Component
 * Handles image upload and navigation
 */
function CarouselEditor({
  images,
  onSelectImages,
  onRemoveImage
}) {
  const [activeIndex, setActiveIndex] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useState)(0);
  const handlePrev = () => {
    setActiveIndex(current => Math.max(0, current - 1));
  };
  const handleNext = () => {
    setActiveIndex(current => Math.min(images.length - 1, current + 1));
  };
  if (images.length === 0) {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.MediaPlaceholder, {
      icon: "format-gallery",
      labels: {
        title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Carousel Images", "showcase"),
        instructions: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Upload up to 5 images for the carousel", "showcase")
      },
      onSelect: media => {
        const selectedImages = Array.isArray(media) ? media : [media];
        const limitedImages = selectedImages.slice(0, 5).map(img => ({
          id: img.id,
          url: img.url,
          alt: img.alt || ""
        }));
        onSelectImages(limitedImages);
      },
      accept: "image/*",
      allowedTypes: ["image"],
      multiple: true
    });
  }
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
    className: "showcase-carousel-editor",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
      className: "carousel__main",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("img", {
        src: images[activeIndex]?.url,
        alt: images[activeIndex]?.alt || ""
      }), images.length > 1 && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.Fragment, {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("button", {
          className: "carousel__arrow carousel__prev",
          onClick: handlePrev,
          disabled: activeIndex === 0,
          "aria-label": (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Previous image", "showcase"),
          children: "\u2039"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("button", {
          className: "carousel__arrow carousel__next",
          onClick: handleNext,
          disabled: activeIndex === images.length - 1,
          "aria-label": (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Next image", "showcase"),
          children: "\u203A"
        })]
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
      className: "carousel__thumbnails",
      children: [images.map((image, index) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
        className: `carousel__thumbnail ${index === activeIndex ? "active" : ""}`,
        onClick: () => setActiveIndex(index),
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("img", {
          src: image.url,
          alt: ""
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("button", {
          className: "remove-image",
          onClick: e => {
            e.stopPropagation();
            onRemoveImage(index);
            if (activeIndex >= index && activeIndex > 0) {
              setActiveIndex(activeIndex - 1);
            }
          },
          "aria-label": (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Remove image", "showcase"),
          children: "\xD7"
        })]
      }, image.id)), images.length < 5 && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.MediaUpload, {
        onSelect: media => {
          const newImages = Array.isArray(media) ? media : [media];
          const mappedImages = newImages.map(img => ({
            id: img.id,
            url: img.url,
            alt: img.alt || ""
          }));
          const combined = [...images, ...mappedImages];
          onSelectImages(combined.slice(0, 5));
        },
        allowedTypes: ["image"],
        multiple: true,
        render: ({
          open
        }) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("button", {
          className: "carousel__add-more",
          onClick: open,
          "aria-label": (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Add more images", "showcase"),
          children: "+"
        })
      })]
    })]
  });
}

/**
 * Feature Tags Editor Component
 * Allows adding/removing simple text tags (pills/badges)
 */
function FeatureTagsEditor({
  featureTags,
  onChange
}) {
  const addTag = () => {
    onChange([...featureTags, ""]);
  };
  const updateTag = (index, value) => {
    const updated = [...featureTags];
    updated[index] = value;
    onChange(updated);
  };
  const removeTag = index => {
    onChange(featureTags.filter((_, i) => i !== index));
  };
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
    className: "showcase-feature-tags-editor",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("h4", {
      children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Feature Tags", "showcase")
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
      className: "feature-tags-list",
      children: featureTags.map((tag, index) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
        className: "feature-tag-item",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.TextControl, {
          value: tag,
          onChange: value => updateTag(index, value),
          placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("e.g. 24x7 Monitoring", "showcase")
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Button, {
          isDestructive: true,
          isSmall: true,
          onClick: () => removeTag(index),
          children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Remove", "showcase")
        })]
      }, index))
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Button, {
      isPrimary: true,
      onClick: addTag,
      children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Add Tag", "showcase")
    })]
  });
}

/**
 * Features Editor Component
 * Allows adding/removing features (always uses checkmark icon)
 */
function FeaturesEditor({
  features,
  onChange
}) {
  const addFeature = () => {
    onChange([...features, {
      icon: "yes",
      text: ""
    }]);
  };
  const updateFeature = (index, value) => {
    const updated = [...features];
    updated[index].text = value;
    updated[index].icon = "yes"; // Always use checkmark
    onChange(updated);
  };
  const removeFeature = index => {
    onChange(features.filter((_, i) => i !== index));
  };
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
    className: "showcase-features-editor",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("h4", {
      children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Features", "showcase")
    }), features.map((feature, index) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
      className: "feature-item-editor",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("span", {
        className: "dashicons dashicons-yes"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.RichText, {
        tagName: "span",
        value: feature.text,
        onChange: value => updateFeature(index, value),
        placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Feature text...", "showcase")
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Button, {
        isDestructive: true,
        isSmall: true,
        onClick: () => removeFeature(index),
        children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Remove", "showcase")
      })]
    }, index)), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Button, {
      isPrimary: true,
      onClick: addFeature,
      children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Add Feature", "showcase")
    })]
  });
}
function Edit({
  attributes,
  setAttributes
}) {
  const {
    topSectionText,
    rating,
    carouselImages,
    serviceName,
    featureTags,
    features,
    specialOfferTitle,
    specialOfferDescription,
    specialOfferUrl,
    primaryButtonText,
    primaryButtonUrl,
    phoneButtonText,
    phoneNumber,
    videoButtonText,
    videoButtonUrl,
    reviewButtonText,
    reviewButtonUrl
  } = attributes;

  // Tab state
  const [activeTab, setActiveTab] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useState)(0);

  // Initialize tabs if not set
  const tabs = attributes.tabs || [{
    title: "Overview",
    content: ""
  }, {
    title: "Features",
    content: ""
  }, {
    title: "Details",
    content: ""
  }];

  // Tab handlers
  const addTab = () => {
    const newTabs = [...tabs, {
      title: "New Tab",
      content: ""
    }];
    setAttributes({
      tabs: newTabs
    });
    setActiveTab(newTabs.length - 1);
  };
  const removeTab = index => {
    if (tabs.length <= 1) return; // Minimum 1 tab
    const newTabs = tabs.filter((_, i) => i !== index);
    setAttributes({
      tabs: newTabs
    });
    if (activeTab >= newTabs.length) {
      setActiveTab(newTabs.length - 1);
    }
  };
  const updateTabTitle = (index, title) => {
    const newTabs = [...tabs];
    newTabs[index].title = title;
    setAttributes({
      tabs: newTabs
    });
  };
  const updateTabContent = (index, content) => {
    const newTabs = [...tabs];
    newTabs[index].content = content;
    setAttributes({
      tabs: newTabs
    });
  };

  // Carousel handlers
  const handleSelectImages = images => {
    setAttributes({
      carouselImages: images
    });
  };
  const handleRemoveImage = index => {
    const updatedImages = carouselImages.filter((_, i) => i !== index);
    setAttributes({
      carouselImages: updatedImages
    });
  };
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.InspectorControls, {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelBody, {
        title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Rating Settings", "showcase"),
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.RangeControl, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Rating Score", "showcase"),
          value: rating,
          onChange: value => setAttributes({
            rating: value
          }),
          min: 0.1,
          max: 5.0,
          step: 0.1
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelBody, {
        title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Button Links", "showcase"),
        initialOpen: false,
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.TextControl, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Special Offer Box URL", "showcase"),
          value: specialOfferUrl,
          onChange: value => setAttributes({
            specialOfferUrl: value
          }),
          placeholder: "https://example.com/special-offer",
          help: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Wraps the entire special offer box as a link", "showcase")
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.TextControl, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Primary Button URL", "showcase"),
          value: primaryButtonUrl,
          onChange: value => setAttributes({
            primaryButtonUrl: value
          }),
          placeholder: "https://example.com/packages"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.TextControl, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Phone Number", "showcase"),
          value: phoneNumber,
          onChange: value => setAttributes({
            phoneNumber: value
          }),
          placeholder: "(555) 123-4567",
          help: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Phone number for the Call Now button", "showcase")
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.TextControl, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Video Review URL", "showcase"),
          value: videoButtonUrl,
          onChange: value => setAttributes({
            videoButtonUrl: value
          }),
          placeholder: "https://example.com/video"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.TextControl, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Full Review URL", "showcase"),
          value: reviewButtonUrl,
          onChange: value => setAttributes({
            reviewButtonUrl: value
          }),
          placeholder: "https://example.com/review"
        })]
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
      ...(0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.useBlockProps)(),
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
        className: "wp-block-sl-blocks-showcase__top-section",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.RichText, {
          tagName: "div",
          className: "top-text",
          value: topSectionText,
          onChange: value => setAttributes({
            topSectionText: value
          }),
          placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Best for Combo Sleepers", "showcase")
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
          className: "rating-display",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("span", {
            className: "score-badge",
            children: rating.toFixed(1)
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(StarRating, {
            rating: rating
          })]
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
        className: "wp-block-sl-blocks-showcase__body",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
          className: "showcase__carousel",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(CarouselEditor, {
            images: carouselImages,
            onSelectImages: handleSelectImages,
            onRemoveImage: handleRemoveImage
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
          className: "showcase__content",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.RichText, {
            tagName: "h3",
            className: "service-name",
            value: serviceName,
            onChange: value => setAttributes({
              serviceName: value
            }),
            placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Service/Product Name", "showcase")
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(FeatureTagsEditor, {
            featureTags: featureTags,
            onChange: value => setAttributes({
              featureTags: value
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(FeaturesEditor, {
            features: features,
            onChange: value => setAttributes({
              features: value
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
            className: "special-offers-editor",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("h4", {
              children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Special Offer", "showcase")
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
              className: "special-offer-box",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.RichText, {
                tagName: "div",
                className: "special-offer-title",
                value: specialOfferTitle,
                onChange: value => setAttributes({
                  specialOfferTitle: value
                }),
                placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Enter Deal Title", "showcase")
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.RichText, {
                tagName: "div",
                className: "special-offer-description",
                value: specialOfferDescription,
                onChange: value => setAttributes({
                  specialOfferDescription: value
                }),
                placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Enter deal description", "showcase"),
                allowedFormats: ["core/link"]
              })]
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
            className: "showcase-buttons-editor",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.RichText, {
              tagName: "div",
              className: "primary-button",
              value: primaryButtonText,
              onChange: value => setAttributes({
                primaryButtonText: value
              }),
              placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("View Packages", "showcase")
            }), phoneNumber && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.RichText, {
              tagName: "div",
              className: "secondary-button",
              value: phoneButtonText,
              onChange: value => setAttributes({
                phoneButtonText: value
              }),
              placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Call Now", "showcase")
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
              className: "secondary-buttons",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.RichText, {
                tagName: "div",
                className: "showcase__link",
                value: videoButtonText,
                onChange: value => setAttributes({
                  videoButtonText: value
                }),
                placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Watch Video Review", "showcase")
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.RichText, {
                tagName: "div",
                className: "showcase__link",
                value: reviewButtonText,
                onChange: value => setAttributes({
                  reviewButtonText: value
                }),
                placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Read Full Review", "showcase")
              })]
            })]
          })]
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
        className: "wp-block-sl-blocks-showcase__tabs",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
          className: "tabs__navigation",
          children: [tabs.map((tab, index) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
            className: `tab__button ${activeTab === index ? 'active' : ''}`,
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.RichText, {
              tagName: "span",
              value: tab.title,
              onChange: value => updateTabTitle(index, value),
              placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Tab Title', 'showcase'),
              onClick: () => setActiveTab(index)
            }), tabs.length > 1 && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("button", {
              className: "remove-tab",
              onClick: e => {
                e.stopPropagation();
                removeTab(index);
              },
              "aria-label": (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Remove tab', 'showcase'),
              children: "\xD7"
            })]
          }, index)), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Button, {
            isPrimary: true,
            isSmall: true,
            onClick: addTab,
            children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('+ Add Tab', 'showcase')
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
          className: "tabs__content",
          children: tabs.map((tab, index) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
            className: `tab__panel ${activeTab === index ? 'active' : ''}`,
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.RichText, {
              tagName: "p",
              value: tab.content,
              onChange: value => updateTabContent(index, value),
              placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Enter tab content...', 'showcase')
            })
          }, index))
        })]
      })]
    })]
  });
}

/***/ },

/***/ "./src/showcase/editor.scss"
/*!**********************************!*\
  !*** ./src/showcase/editor.scss ***!
  \**********************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ },

/***/ "./src/showcase/index.js"
/*!*******************************!*\
  !*** ./src/showcase/index.js ***!
  \*******************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.scss */ "./src/showcase/style.scss");
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./edit */ "./src/showcase/edit.js");
/* harmony import */ var _save__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./save */ "./src/showcase/save.js");
/* harmony import */ var _block_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./block.json */ "./src/showcase/block.json");





(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__.registerBlockType)(_block_json__WEBPACK_IMPORTED_MODULE_4__.name, {
  edit: _edit__WEBPACK_IMPORTED_MODULE_2__["default"],
  save: _save__WEBPACK_IMPORTED_MODULE_3__["default"]
});

/***/ },

/***/ "./src/showcase/save.js"
/*!******************************!*\
  !*** ./src/showcase/save.js ***!
  \******************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ save)
/* harmony export */ });
function save() {
  // Return null to use server-side rendering via render.php
  return null;
}

/***/ },

/***/ "./src/showcase/style.scss"
/*!*********************************!*\
  !*** ./src/showcase/style.scss ***!
  \*********************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ },

/***/ "@wordpress/block-editor"
/*!*************************************!*\
  !*** external ["wp","blockEditor"] ***!
  \*************************************/
(module) {

module.exports = window["wp"]["blockEditor"];

/***/ },

/***/ "@wordpress/blocks"
/*!********************************!*\
  !*** external ["wp","blocks"] ***!
  \********************************/
(module) {

module.exports = window["wp"]["blocks"];

/***/ },

/***/ "@wordpress/components"
/*!************************************!*\
  !*** external ["wp","components"] ***!
  \************************************/
(module) {

module.exports = window["wp"]["components"];

/***/ },

/***/ "@wordpress/element"
/*!*********************************!*\
  !*** external ["wp","element"] ***!
  \*********************************/
(module) {

module.exports = window["wp"]["element"];

/***/ },

/***/ "@wordpress/i18n"
/*!******************************!*\
  !*** external ["wp","i18n"] ***!
  \******************************/
(module) {

module.exports = window["wp"]["i18n"];

/***/ },

/***/ "react/jsx-runtime"
/*!**********************************!*\
  !*** external "ReactJSXRuntime" ***!
  \**********************************/
(module) {

module.exports = window["ReactJSXRuntime"];

/***/ }

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Check if module exists (development only)
/******/ 		if (__webpack_modules__[moduleId] === undefined) {
/******/ 			var e = new Error("Cannot find module '" + moduleId + "'");
/******/ 			e.code = 'MODULE_NOT_FOUND';
/******/ 			throw e;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"showcase/index": 0,
/******/ 			"showcase/style-index": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = globalThis["webpackChunksl_blocks"] = globalThis["webpackChunksl_blocks"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["showcase/style-index"], () => (__webpack_require__("./src/showcase/index.js")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=index.js.map