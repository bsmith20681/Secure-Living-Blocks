/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/showcase/block.json"
/*!*********************************!*\
  !*** ./src/showcase/block.json ***!
  \*********************************/
(module) {

module.exports = /*#__PURE__*/JSON.parse('{"$schema":"https://schemas.wp.org/trunk/block.json","apiVersion":3,"name":"create-block/showcase","version":"0.1.0","title":"Product Showcase","category":"widgets","icon":"star-filled","description":"Display product information with rating, carousel, and features","example":{},"attributes":{"topSectionText":{"type":"string","default":"Best for Combo Sleepers"},"rating":{"type":"number","default":4.8},"carouselImages":{"type":"array","default":[]},"serviceName":{"type":"string","default":""},"featureTags":{"type":"array","default":[]},"features":{"type":"array","default":[]},"specialOfferTitle":{"type":"string","default":""},"specialOfferDescription":{"type":"string","default":""},"specialOfferUrl":{"type":"string","default":""},"primaryButtonText":{"type":"string","default":"View Packages"},"primaryButtonUrl":{"type":"string","default":""},"phoneButtonText":{"type":"string","default":"Call Now"},"phoneNumber":{"type":"string","default":""},"videoButtonText":{"type":"string","default":"Watch Video Review"},"videoButtonUrl":{"type":"string","default":""},"reviewButtonText":{"type":"string","default":"Read Full Review"},"reviewButtonUrl":{"type":"string","default":""}},"supports":{"html":false,"align":["wide","full"]},"textdomain":"showcase","editorScript":"file:./index.js","editorStyle":"file:./index.css","style":"file:./style-index.css","render":"file:./render.php","viewScript":"file:./view.js"}');

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
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _editor_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./editor.scss */ "./src/showcase/editor.scss");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__);








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
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
    className: "flex items-center justify-center gap-1 flex-wrap",
    "aria-label": `${rating} out of 5 stars`,
    children: [[...Array(fullStars)].map((_, i) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("svg", {
      width: "20",
      height: "20",
      viewBox: "0 0 24 24",
      className: "text-brand-accent",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("path", {
        d: starPath,
        fill: "currentColor"
      })
    }, `full-${i}`)), hasPartialStar && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("svg", {
      width: "20",
      height: "20",
      viewBox: "0 0 24 24",
      className: "text-brand-accent",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("defs", {
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("linearGradient", {
          id: `star-gradient-${rating}`,
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("stop", {
            offset: `${partialStarPercent}%`,
            stopColor: "currentColor"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("stop", {
            offset: `${partialStarPercent}%`,
            stopColor: "#e0e0e0"
          })]
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("path", {
        d: starPath,
        fill: `url(#star-gradient-${rating})`
      })]
    }, "partial"), [...Array(emptyStars)].map((_, i) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("svg", {
      width: "20",
      height: "20",
      viewBox: "0 0 24 24",
      className: "text-border-light",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("path", {
        d: starPath,
        fill: "currentColor"
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
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.MediaPlaceholder, {
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
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
    className: "w-full",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
      className: "relative w-full aspect-[4/3] bg-gray-100 rounded-lg overflow-hidden mb-4",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("img", {
        src: images[activeIndex]?.url,
        alt: images[activeIndex]?.alt || "",
        className: "w-full h-full object-cover"
      }), images.length > 1 && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.Fragment, {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("button", {
          className: "absolute top-1/2 left-2.5 -translate-y-1/2 bg-black/50 text-white border-none w-10 h-10 rounded-full text-2xl cursor-pointer flex items-center justify-center transition-colors z-[2] hover:bg-black/70 focus:outline-2 focus:outline-brand-primary focus:outline-offset-2 disabled:opacity-30 disabled:cursor-not-allowed",
          onClick: handlePrev,
          disabled: activeIndex === 0,
          "aria-label": (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Previous image", "showcase"),
          children: "\u2039"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("button", {
          className: "absolute top-1/2 right-2.5 -translate-y-1/2 bg-black/50 text-white border-none w-10 h-10 rounded-full text-2xl cursor-pointer flex items-center justify-center transition-colors z-[2] hover:bg-black/70 focus:outline-2 focus:outline-brand-primary focus:outline-offset-2 disabled:opacity-30 disabled:cursor-not-allowed",
          onClick: handleNext,
          disabled: activeIndex === images.length - 1,
          "aria-label": (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Next image", "showcase"),
          children: "\u203A"
        })]
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
      className: "flex gap-2 overflow-x-auto pb-2",
      children: [images.map((image, index) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
        className: `relative w-20 h-20 flex-shrink-0 rounded overflow-hidden cursor-pointer border-2 transition-colors group ${index === activeIndex ? "border-brand-primary shadow-[0_0_0_1px_#1626b8]" : "border-transparent hover:border-brand-primary"}`,
        onClick: () => setActiveIndex(index),
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("img", {
          src: image.url,
          alt: "",
          className: "w-full h-full object-cover"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("button", {
          className: "absolute top-0.5 right-0.5 bg-red-500/80 text-white border-none w-5 h-5 rounded-full text-base leading-none cursor-pointer hidden group-hover:flex items-center justify-center hover:bg-red-500",
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
      }, image.id)), images.length < 5 && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.MediaUpload, {
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
        }) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("button", {
          className: "w-20 h-20 flex-shrink-0 border-2 border-dashed border-brand-primary bg-surface-light rounded text-brand-primary text-3xl cursor-pointer flex items-center justify-center transition-all hover:bg-surface-lighter hover:border-brand-primary-dark",
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
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
    className: "mb-4",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("h4", {
      className: "text-base font-semibold mb-3 text-text-primary",
      children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Feature Tags", "showcase")
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("div", {
      className: "space-y-2",
      children: featureTags.map((tag, index) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
        className: "flex items-center gap-2",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.TextControl, {
          value: tag,
          onChange: value => updateTag(index, value),
          placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("e.g. 24x7 Monitoring", "showcase")
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.Button, {
          isDestructive: true,
          isSmall: true,
          onClick: () => removeTag(index),
          children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Remove", "showcase")
        })]
      }, index))
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.Button, {
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
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
    className: "mb-4",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("h4", {
      className: "text-base font-semibold mb-3 text-text-primary",
      children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Features", "showcase")
    }), features.map((feature, index) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
      className: "flex items-center gap-2 mb-3 p-2 bg-gray-50 rounded",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("span", {
        className: "dashicons dashicons-yes text-brand-primary"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.RichText, {
        tagName: "span",
        value: feature.text,
        onChange: value => updateFeature(index, value),
        placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Feature text...", "showcase"),
        className: "flex-1"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.Button, {
        isDestructive: true,
        isSmall: true,
        onClick: () => removeFeature(index),
        children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Remove", "showcase")
      })]
    }, index)), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.Button, {
      isPrimary: true,
      onClick: addFeature,
      children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Add Feature", "showcase")
    })]
  });
}
function Edit({
  attributes,
  setAttributes,
  clientId
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

  // Tab state - tracks which tab is active in the editor
  const [activeTab, setActiveTab] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useState)(0);

  // Get inner blocks (showcase-tab children) and dispatch
  const {
    insertBlock,
    removeBlock,
    updateBlockAttributes
  } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_3__.useDispatch)("core/block-editor");
  const innerBlocks = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_3__.useSelect)(select => select("core/block-editor").getBlocks(clientId), [clientId]);

  // Tab handlers
  const addTab = () => {
    const newBlock = (0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_4__.createBlock)("create-block/showcase-tab", {
      title: "New Tab"
    });
    insertBlock(newBlock, innerBlocks.length, clientId);
    setActiveTab(innerBlocks.length);
  };
  const removeTab = index => {
    if (innerBlocks.length <= 1) return;
    const blockToRemove = innerBlocks[index];
    if (blockToRemove) {
      removeBlock(blockToRemove.clientId);
      if (activeTab >= innerBlocks.length - 1) {
        setActiveTab(Math.max(0, innerBlocks.length - 2));
      } else if (activeTab > index) {
        setActiveTab(activeTab - 1);
      }
    }
  };
  const updateTabTitle = (index, title) => {
    const block = innerBlocks[index];
    if (block) {
      updateBlockAttributes(block.clientId, {
        title
      });
    }
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
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.InspectorControls, {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.PanelBody, {
        title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Rating Settings", "showcase"),
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.RangeControl, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Rating Score", "showcase"),
          value: rating,
          onChange: value => setAttributes({
            rating: value
          }),
          min: 0.1,
          max: 5.0,
          step: 0.1
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.PanelBody, {
        title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Button Links", "showcase"),
        initialOpen: false,
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.TextControl, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Special Offer Box URL", "showcase"),
          value: specialOfferUrl,
          onChange: value => setAttributes({
            specialOfferUrl: value
          }),
          placeholder: "https://example.com/special-offer",
          help: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Wraps the entire special offer box as a link", "showcase")
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.TextControl, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Primary Button URL", "showcase"),
          value: primaryButtonUrl,
          onChange: value => setAttributes({
            primaryButtonUrl: value
          }),
          placeholder: "https://example.com/packages"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.TextControl, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Phone Number", "showcase"),
          value: phoneNumber,
          onChange: value => setAttributes({
            phoneNumber: value
          }),
          placeholder: "(555) 123-4567",
          help: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Phone number for the Call Now button", "showcase")
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.TextControl, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Video Review URL", "showcase"),
          value: videoButtonUrl,
          onChange: value => setAttributes({
            videoButtonUrl: value
          }),
          placeholder: "https://example.com/video"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.TextControl, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Full Review URL", "showcase"),
          value: reviewButtonUrl,
          onChange: value => setAttributes({
            reviewButtonUrl: value
          }),
          placeholder: "https://example.com/review"
        })]
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
      ...(0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.useBlockProps)({
        className: "border border-brand-primary-dark rounded-lg mb-6"
      }),
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
        className: "text-center flex justify-between items-center bg-surface-lighter p-4 rounded-t-lg",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.RichText, {
          tagName: "div",
          className: "text-2xl md:text-3xl font-medium text-text-primary",
          value: topSectionText,
          onChange: value => setAttributes({
            topSectionText: value
          }),
          placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Best for Combo Sleepers", "showcase")
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
          className: "flex items-center justify-center gap-1 flex-wrap",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("span", {
            className: "font-bold py-2 px-4 text-3xl",
            children: rating.toFixed(1)
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(StarRating, {
            rating: rating
          })]
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
        className: "grid grid-cols-1 md:grid-cols-2 gap-8 p-4 md:py-8 bg-surface-light",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("div", {
          className: "w-full",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(CarouselEditor, {
            images: carouselImages,
            onSelectImages: handleSelectImages,
            onRemoveImage: handleRemoveImage
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
          className: "flex flex-col gap-6",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.RichText, {
            tagName: "h3",
            className: "text-2xl md:text-4xl font-medium text-text-primary m-0",
            value: serviceName,
            onChange: value => setAttributes({
              serviceName: value
            }),
            placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Service/Product Name", "showcase")
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(FeatureTagsEditor, {
            featureTags: featureTags,
            onChange: value => setAttributes({
              featureTags: value
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(FeaturesEditor, {
            features: features,
            onChange: value => setAttributes({
              features: value
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("h4", {
              className: "text-base font-semibold mb-3 text-text-primary",
              children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Special Offer", "showcase")
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
              className: "bg-white border border-border-light rounded p-5 text-center mb-4",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.RichText, {
                tagName: "div",
                className: "text-xl font-bold text-text-primary mb-2",
                value: specialOfferTitle,
                onChange: value => setAttributes({
                  specialOfferTitle: value
                }),
                placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Enter Deal Title", "showcase")
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.RichText, {
                tagName: "div",
                className: "text-sm text-text-secondary leading-relaxed",
                value: specialOfferDescription,
                onChange: value => setAttributes({
                  specialOfferDescription: value
                }),
                placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Enter deal description", "showcase"),
                allowedFormats: ["core/link"]
              })]
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
            className: "flex flex-col gap-6",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.RichText, {
              tagName: "div",
              className: "bg-brand-primary text-white py-4 px-8 border-none rounded font-semibold text-center block cursor-pointer transition-colors hover:bg-brand-primary-dark",
              value: primaryButtonText,
              onChange: value => setAttributes({
                primaryButtonText: value
              }),
              placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("View Packages", "showcase")
            }), phoneNumber && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.RichText, {
              tagName: "div",
              className: "bg-transparent text-brand-primary py-4 px-8 border-2 border-brand-primary rounded font-semibold text-center flex items-center justify-center gap-2 cursor-pointer transition-all",
              value: phoneButtonText,
              onChange: value => setAttributes({
                phoneButtonText: value
              }),
              placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Call Now", "showcase")
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
              className: "grid grid-cols-1 sm:grid-cols-2 gap-3",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.RichText, {
                tagName: "div",
                className: "text-sm",
                value: videoButtonText,
                onChange: value => setAttributes({
                  videoButtonText: value
                }),
                placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Watch Video Review", "showcase")
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.RichText, {
                tagName: "div",
                className: "text-sm",
                value: reviewButtonText,
                onChange: value => setAttributes({
                  reviewButtonText: value
                }),
                placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Read Full Review", "showcase")
              })]
            })]
          })]
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
        className: "bg-surface-light px-4 pb-8",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
          className: "flex gap-2 border-b-2 border-border-light mb-6",
          children: [innerBlocks.map((block, index) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
            className: `bg-transparent border-none py-4 px-6 text-base font-medium cursor-pointer relative transition-colors ${activeTab === index ? "text-brand-primary after:content-[''] after:absolute after:bottom-[-2px] after:left-0 after:right-0 after:h-0.5 after:bg-brand-primary" : "text-text-muted hover:text-brand-primary"}`,
            onClick: () => setActiveTab(index),
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.RichText, {
              tagName: "span",
              value: block.attributes.title,
              onChange: value => updateTabTitle(index, value),
              placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Tab Title', 'showcase')
            }), innerBlocks.length > 1 && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("button", {
              className: "ml-2 text-red-500 hover:text-red-700",
              onClick: e => {
                e.stopPropagation();
                removeTab(index);
              },
              "aria-label": (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Remove tab', 'showcase'),
              children: "\xD7"
            })]
          }, block.clientId)), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.Button, {
            isPrimary: true,
            isSmall: true,
            onClick: addTab,
            children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('+ Add Tab', 'showcase')
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("div", {
          "data-active-tab": activeTab,
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.InnerBlocks, {
            allowedBlocks: ["create-block/showcase-tab"],
            template: [["create-block/showcase-tab", {
              title: "Overview"
            }], ["create-block/showcase-tab", {
              title: "Features"
            }], ["create-block/showcase-tab", {
              title: "Details"
            }]],
            renderAppender: false
          })
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
/* harmony import */ var _editor_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./editor.scss */ "./src/showcase/editor.scss");
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./edit */ "./src/showcase/edit.js");
/* harmony import */ var _save__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./save */ "./src/showcase/save.js");
/* harmony import */ var _block_json__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./block.json */ "./src/showcase/block.json");






(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__.registerBlockType)(_block_json__WEBPACK_IMPORTED_MODULE_5__.name, {
  edit: _edit__WEBPACK_IMPORTED_MODULE_3__["default"],
  save: _save__WEBPACK_IMPORTED_MODULE_4__["default"]
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
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);


function save() {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
    ..._wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__.useBlockProps.save(),
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__.InnerBlocks.Content, {})
  });
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

/***/ "@wordpress/data"
/*!******************************!*\
  !*** external ["wp","data"] ***!
  \******************************/
(module) {

module.exports = window["wp"]["data"];

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