{
	"translatorID": "a515a220-6fef-45ea-9842-8025dfebcc8f",
	"label": "Better BibTeX Citation Key Quick Copy",
	"description": "exports citations to be copy-pasted into your LaTeX/Markdown /Org-mode/etc documents",
	"creator": "Emiliano heyns",
	"target": "txt",
	"minVersion": "4.0.27",
	"translatorType": 2,
	"browserSupport": "gcsv",
	"priority": 100,
	"displayOptions": {
		"quickCopyMode": ""
	},
	"inRepository": false,
	"configOptions": {
		"hash": "33a10315d24a32c4a3da1a71eafc94d1b35312268925cd25be1fe5758d8dfd77"
	},
	"lastUpdated": "2023-05-02"
}

ZOTERO_CONFIG = {"GUID":"zotero@chnm.gmu.edu","ID":"zotero","CLIENT_NAME":"Zotero","DOMAIN_NAME":"zotero.org","PRODUCER":"Digital Scholar","PRODUCER_URL":"https://digitalscholar.org","REPOSITORY_URL":"https://repo.zotero.org/repo/","BASE_URI":"http://zotero.org/","WWW_BASE_URL":"https://www.zotero.org/","PROXY_AUTH_URL":"https://zoteroproxycheck.s3.amazonaws.com/test","API_URL":"https://api.zotero.org/","STREAMING_URL":"wss://stream.zotero.org/","SERVICES_URL":"https://services.zotero.org/","API_VERSION":3,"CONNECTOR_MIN_VERSION":"5.0.39","PREF_BRANCH":"extensions.zotero.","BOOKMARKLET_ORIGIN":"https://www.zotero.org","BOOKMARKLET_URL":"https://www.zotero.org/bookmarklet/","START_URL":"https://www.zotero.org/start","QUICK_START_URL":"https://www.zotero.org/support/quick_start_guide","PDF_TOOLS_URL":"https://www.zotero.org/download/xpdf/","SUPPORT_URL":"https://www.zotero.org/support/","SYNC_INFO_URL":"https://www.zotero.org/support/sync","TROUBLESHOOTING_URL":"https://www.zotero.org/support/getting_help","FEEDBACK_URL":"https://forums.zotero.org/","CONNECTORS_URL":"https://www.zotero.org/download/connectors","CHANGELOG_URL":"https://www.zotero.org/support/changelog","CREDITS_URL":"https://www.zotero.org/support/credits_and_acknowledgments","LICENSING_URL":"https://www.zotero.org/support/licensing","GET_INVOLVED_URL":"https://www.zotero.org/getinvolved","DICTIONARIES_URL":"https://download.zotero.org/dictionaries/"}

        if (typeof ZOTERO_TRANSLATOR_INFO === 'undefined') var ZOTERO_TRANSLATOR_INFO = {}; // declare if not declared
        Object.assign(ZOTERO_TRANSLATOR_INFO, {"translatorID":"a515a220-6fef-45ea-9842-8025dfebcc8f","label":"Better BibTeX Citation Key Quick Copy","description":"exports citations to be copy-pasted into your LaTeX/Markdown /Org-mode/etc documents","creator":"Emiliano heyns","target":"txt","minVersion":"4.0.27","translatorType":2,"browserSupport":"gcsv","priority":100,"displayOptions":{"quickCopyMode":""},"inRepository":false}); // assign new data
      
var { doExport } = (() => {
  var __create = Object.create;
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getProtoOf = Object.getPrototypeOf;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };
  var __export = (target, all) => {
    for (var name in all)
      __defProp(target, name, { get: all[name], enumerable: true });
  };
  var __copyProps = (to, from, except, desc) => {
    if (from && typeof from === "object" || typeof from === "function") {
      for (let key of __getOwnPropNames(from))
        if (!__hasOwnProp.call(to, key) && key !== except)
          __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
    }
    return to;
  };
  var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
    // If the importer is in node compatibility mode or this is not an ESM
    // file that has been converted to a CommonJS file using a Babel-
    // compatible transform (i.e. "__esModule" has not been set), then set
    // "default" to the CommonJS "module.exports" for node compatibility.
    isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
    mod
  ));
  var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

  // node_modules/eta/dist/browser.min.umd.js
  var require_browser_min_umd = __commonJS({
    "node_modules/eta/dist/browser.min.umd.js"(exports, module) {
      !function(e, n) {
        "object" == typeof exports && "undefined" != typeof module ? n(exports) : "function" == typeof define && define.amd ? define(["exports"], n) : n((e || self).eta = {});
      }(exports, function(e) {
        function n(e2) {
          var t2, r2, i2 = new Error(e2);
          return t2 = i2, r2 = n.prototype, Object.setPrototypeOf ? Object.setPrototypeOf(t2, r2) : t2.__proto__ = r2, i2;
        }
        __name(n, "n");
        function t(e2, t2, r2) {
          var i2 = t2.slice(0, r2).split(/\n/), a2 = i2.length, c2 = i2[a2 - 1].length + 1;
          throw n(e2 += " at line " + a2 + " col " + c2 + ":\n\n  " + t2.split(/\n/)[a2 - 1] + "\n  " + Array(c2).join(" ") + "^");
        }
        __name(t, "t");
        n.prototype = Object.create(Error.prototype, { name: { value: "Eta Error", enumerable: false } });
        var r = new Function("return this")().Promise;
        function i(e2, n2) {
          for (var t2 in n2)
            Object.prototype.hasOwnProperty.call(n2, t2) && (e2[t2] = n2[t2]);
          return e2;
        }
        __name(i, "i");
        var a = { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" };
        function c(e2) {
          return a[e2];
        }
        __name(c, "c");
        var o = /`(?:\\[\s\S]|\${(?:[^{}]|{(?:[^{}]|{[^}]*})*})*}|(?!\${)[^\\`])*`/g, s = /'(?:\\[\s\w"'\\`]|[^\n\r'\\])*?'/g, l = /"(?:\\[\s\w"'\\`]|[^\n\r"\\])*?"/g;
        function u(e2) {
          return e2.replace(/[.*+\-?^${}()|[\]\\]/g, "\\$&");
        }
        __name(u, "u");
        function p(e2, n2) {
          var r2 = [], i2 = false, a2 = 0, c2 = n2.parse;
          if (n2.plugins)
            for (var p2 = 0; p2 < n2.plugins.length; p2++) {
              var f2 = n2.plugins[p2];
              f2.processTemplate && (e2 = f2.processTemplate(e2, n2));
            }
          function d2(e3, t2) {
            e3 && (e3 = function(e4, n3, t3, r3) {
              var i3, a3;
              return Array.isArray(n3.autoTrim) ? (i3 = n3.autoTrim[1], a3 = n3.autoTrim[0]) : i3 = a3 = n3.autoTrim, (t3 || false === t3) && (i3 = t3), (r3 || false === r3) && (a3 = r3), a3 || i3 ? "slurp" === i3 && "slurp" === a3 ? e4.trim() : ("_" === i3 || "slurp" === i3 ? e4 = function(e5) {
                return String.prototype.trimLeft ? e5.trimLeft() : e5.replace(/^\s+/, "");
              }(e4) : "-" !== i3 && "nl" !== i3 || (e4 = e4.replace(/^(?:\r\n|\n|\r)/, "")), "_" === a3 || "slurp" === a3 ? e4 = function(e5) {
                return String.prototype.trimRight ? e5.trimRight() : e5.replace(/\s+$/, "");
              }(e4) : "-" !== a3 && "nl" !== a3 || (e4 = e4.replace(/(?:\r\n|\n|\r)$/, "")), e4) : e4;
            }(e3, n2, i2, t2)) && (e3 = e3.replace(/\\|'/g, "\\$&").replace(/\r\n|\n|\r/g, "\\n"), r2.push(e3));
          }
          __name(d2, "d");
          n2.rmWhitespace && (e2 = e2.replace(/[\r\n]+/g, "\n").replace(/^\s+|\s+$/gm, "")), o.lastIndex = 0, s.lastIndex = 0, l.lastIndex = 0;
          for (var g2, h2 = [c2.exec, c2.interpolate, c2.raw].reduce(function(e3, n3) {
            return e3 && n3 ? e3 + "|" + u(n3) : n3 ? u(n3) : e3;
          }, ""), m2 = new RegExp("([^]*?)" + u(n2.tags[0]) + "(-|_)?\\s*(" + h2 + ")?\\s*", "g"), v2 = new RegExp("'|\"|`|\\/\\*|(\\s*(-|_)?" + u(n2.tags[1]) + ")", "g"); g2 = m2.exec(e2); ) {
            a2 = g2[0].length + g2.index;
            var x2 = g2[1], y = g2[3] || "";
            d2(x2, g2[2]), v2.lastIndex = a2;
            for (var _ = void 0, w = false; _ = v2.exec(e2); ) {
              if (_[1]) {
                var b = e2.slice(a2, _.index);
                m2.lastIndex = a2 = v2.lastIndex, i2 = _[2], w = { t: y === c2.exec ? "e" : y === c2.raw ? "r" : y === c2.interpolate ? "i" : "", val: b };
                break;
              }
              var E = _[0];
              if ("/*" === E) {
                var I = e2.indexOf("*/", v2.lastIndex);
                -1 === I && t("unclosed comment", e2, _.index), v2.lastIndex = I;
              } else
                "'" === E ? (s.lastIndex = _.index, s.exec(e2) ? v2.lastIndex = s.lastIndex : t("unclosed string", e2, _.index)) : '"' === E ? (l.lastIndex = _.index, l.exec(e2) ? v2.lastIndex = l.lastIndex : t("unclosed string", e2, _.index)) : "`" === E && (o.lastIndex = _.index, o.exec(e2) ? v2.lastIndex = o.lastIndex : t("unclosed string", e2, _.index));
            }
            w ? r2.push(w) : t("unclosed tag", e2, g2.index + x2.length);
          }
          if (d2(e2.slice(a2, e2.length), false), n2.plugins)
            for (var R = 0; R < n2.plugins.length; R++) {
              var T = n2.plugins[R];
              T.processAST && (r2 = T.processAST(r2, n2));
            }
          return r2;
        }
        __name(p, "p");
        function f(e2, n2) {
          var t2 = p(e2, n2), r2 = "var tR='',__l,__lP" + (n2.include ? ",include=E.include.bind(E)" : "") + (n2.includeFile ? ",includeFile=E.includeFile.bind(E)" : "") + "\nfunction layout(p,d){__l=p;__lP=d}\n" + (n2.useWith ? "with(" + n2.varName + "||{}){" : "") + function(e3, n3) {
            for (var t3 = 0, r3 = e3.length, i3 = ""; t3 < r3; t3++) {
              var a3 = e3[t3];
              if ("string" == typeof a3)
                i3 += "tR+='" + a3 + "'\n";
              else {
                var c2 = a3.t, o2 = a3.val || "";
                "r" === c2 ? (n3.filter && (o2 = "E.filter(" + o2 + ")"), i3 += "tR+=" + o2 + "\n") : "i" === c2 ? (n3.filter && (o2 = "E.filter(" + o2 + ")"), n3.autoEscape && (o2 = "E.e(" + o2 + ")"), i3 += "tR+=" + o2 + "\n") : "e" === c2 && (i3 += o2 + "\n");
              }
            }
            return i3;
          }(t2, n2) + (n2.includeFile ? "if(__l)tR=" + (n2.async ? "await " : "") + "includeFile(__l,Object.assign(" + n2.varName + ",{body:tR},__lP))\n" : n2.include ? "if(__l)tR=" + (n2.async ? "await " : "") + "include(__l,Object.assign(" + n2.varName + ",{body:tR},__lP))\n" : "") + "if(cb){cb(null,tR)} return tR" + (n2.useWith ? "}" : "");
          if (n2.plugins)
            for (var i2 = 0; i2 < n2.plugins.length; i2++) {
              var a2 = n2.plugins[i2];
              a2.processFnString && (r2 = a2.processFnString(r2, n2));
            }
          return r2;
        }
        __name(f, "f");
        var d = new (/* @__PURE__ */ function() {
          function e2(e3) {
            this.cache = void 0, this.cache = e3;
          }
          __name(e2, "e");
          var n2 = e2.prototype;
          return n2.define = function(e3, n3) {
            this.cache[e3] = n3;
          }, n2.get = function(e3) {
            return this.cache[e3];
          }, n2.remove = function(e3) {
            delete this.cache[e3];
          }, n2.reset = function() {
            this.cache = {};
          }, n2.load = function(e3) {
            i(this.cache, e3);
          }, e2;
        }())({}), g = { async: false, autoEscape: true, autoTrim: [false, "nl"], cache: false, e: function(e2) {
          var n2 = String(e2);
          return /[&<>"']/.test(n2) ? n2.replace(/[&<>"']/g, c) : n2;
        }, include: function(e2, t2) {
          var r2 = this.templates.get(e2);
          if (!r2)
            throw n('Could not fetch template "' + e2 + '"');
          return r2(t2, this);
        }, parse: { exec: "", interpolate: "=", raw: "~" }, plugins: [], rmWhitespace: false, tags: ["<%", "%>"], templates: d, useWith: false, varName: "it" };
        function h(e2, n2) {
          var t2 = {};
          return i(t2, g), n2 && i(t2, n2), e2 && i(t2, e2), t2;
        }
        __name(h, "h");
        function m(e2, t2) {
          var r2 = h(t2 || {}), i2 = r2.async ? function() {
            try {
              return new Function("return (async function(){}).constructor")();
            } catch (e3) {
              throw e3 instanceof SyntaxError ? n("This environment doesn't support async/await") : e3;
            }
          }() : Function;
          try {
            return new i2(r2.varName, "E", "cb", f(e2, r2));
          } catch (t3) {
            throw t3 instanceof SyntaxError ? n("Bad template syntax\n\n" + t3.message + "\n" + Array(t3.message.length + 1).join("=") + "\n" + f(e2, r2) + "\n") : t3;
          }
        }
        __name(m, "m");
        function v(e2, n2) {
          if (n2.cache && n2.name && n2.templates.get(n2.name))
            return n2.templates.get(n2.name);
          var t2 = "function" == typeof e2 ? e2 : m(e2, n2);
          return n2.cache && n2.name && n2.templates.define(n2.name, t2), t2;
        }
        __name(v, "v");
        function x(e2, t2, i2, a2) {
          var c2 = h(i2 || {});
          if (!c2.async)
            return v(e2, c2)(t2, c2);
          if (!a2) {
            if ("function" == typeof r)
              return new r(function(n2, r2) {
                try {
                  n2(v(e2, c2)(t2, c2));
                } catch (e3) {
                  r2(e3);
                }
              });
            throw n("Please provide a callback function, this env doesn't support Promises");
          }
          try {
            v(e2, c2)(t2, c2, a2);
          } catch (e3) {
            return a2(e3);
          }
        }
        __name(x, "x");
        e.compile = m, e.compileToString = f, e.config = g, e.configure = function(e2) {
          return i(g, e2);
        }, e.defaultConfig = g, e.getConfig = h, e.parse = p, e.render = x, e.renderAsync = function(e2, n2, t2, r2) {
          return x(e2, n2, Object.assign({}, t2, { async: true }), r2);
        }, e.templates = d;
      });
    }
  });

  // translators/Better BibTeX Citation Key Quick Copy.ts
  var Better_BibTeX_Citation_Key_Quick_Copy_exports = {};
  __export(Better_BibTeX_Citation_Key_Quick_Copy_exports, {
    doExport: () => doExport
  });

  // content/client.ts
  var ctx = typeof self === "undefined" ? void 0 : self;
  var _a;
  var worker = !!((_a = ctx == null ? void 0 : ctx.location) == null ? void 0 : _a.search);
  function clientname() {
    var _a2;
    if (worker)
      return new URLSearchParams(ctx.location.search).get("clientName");
    if (Zotero.clientName)
      return Zotero.clientName;
    if ((_a2 = Zotero.BetterBibTeX) == null ? void 0 : _a2.clientName)
      return Zotero.BetterBibTeX.clientName;
    throw new Error("Unable to detect clientName");
  }
  __name(clientname, "clientname");
  var clientName = clientname();
  var client = clientName.toLowerCase().replace("-", "");

  // gen/items/simplify.ts
  var zotero = client === "zotero";
  var jurism = !zotero;
  function unalias(item, { scrub = true } = {}) {
    delete item.inPublications;
    let v;
    if (v = item.dateDecided || item.issueDate || item.dateEnacted)
      item.date = v;
    if (scrub) {
      delete item.dateDecided;
      delete item.issueDate;
      delete item.dateEnacted;
    }
    if (v = item.artworkMedium || item.audioRecordingFormat || item.videoRecordingFormat || item.interviewMedium || item.audioFileType)
      item.medium = v;
    if (scrub) {
      delete item.artworkMedium;
      delete item.audioRecordingFormat;
      delete item.videoRecordingFormat;
      delete item.interviewMedium;
      delete item.audioFileType;
    }
    if (v = item.billNumber || item.docketNumber || item.patentNumber || item.episodeNumber || item.reportNumber || item.publicLawNumber)
      item.number = v;
    if (scrub) {
      delete item.billNumber;
      delete item.docketNumber;
      delete item.patentNumber;
      delete item.episodeNumber;
      delete item.reportNumber;
      delete item.publicLawNumber;
    }
    if (v = item.codePages || item.firstPage)
      item.pages = v;
    if (scrub) {
      delete item.codePages;
      delete item.firstPage;
    }
    if (v = item.blogTitle || item.bookTitle || item.proceedingsTitle || item.dictionaryTitle || item.encyclopediaTitle || item.forumTitle || item.programTitle || item.websiteTitle)
      item.publicationTitle = v;
    if (scrub) {
      delete item.blogTitle;
      delete item.bookTitle;
      delete item.proceedingsTitle;
      delete item.dictionaryTitle;
      delete item.encyclopediaTitle;
      delete item.forumTitle;
      delete item.programTitle;
      delete item.websiteTitle;
    }
    if (v = item.label || item.company || item.distributor || item.network || item.university || item.studio)
      item.publisher = v;
    if (scrub) {
      delete item.label;
      delete item.company;
      delete item.distributor;
      delete item.network;
      delete item.university;
      delete item.studio;
    }
    if (v = item.caseName || item.subject || item.nameOfAct)
      item.title = v;
    if (scrub) {
      delete item.caseName;
      delete item.subject;
      delete item.nameOfAct;
    }
    if (v = item.websiteType || item.genre || item.postType || item.letterType || item.manuscriptType || item.mapType || item.presentationType || item.reportType || item.thesisType)
      item.type = v;
    if (scrub) {
      delete item.websiteType;
      delete item.genre;
      delete item.postType;
      delete item.letterType;
      delete item.manuscriptType;
      delete item.mapType;
      delete item.presentationType;
      delete item.reportType;
      delete item.thesisType;
    }
    if (v = item.codeVolume || item.reporterVolume)
      item.volume = v;
    if (scrub) {
      delete item.codeVolume;
      delete item.reporterVolume;
    }
    if (zotero) {
      if (v = item.legislativeBody || item.court || item.issuingAuthority || item.organization)
        item.authority = v;
      if (scrub) {
        delete item.legislativeBody;
        delete item.court;
        delete item.issuingAuthority;
        delete item.organization;
      }
      if (item.format)
        item.medium = item.format;
      if (scrub) {
        delete item.format;
      }
      if (v = item.identifier || item.documentNumber || item.archiveID)
        item.number = v;
      if (scrub) {
        delete item.identifier;
        delete item.documentNumber;
        delete item.archiveID;
      }
      if (item.repositoryLocation)
        item.place = item.repositoryLocation;
      if (scrub) {
        delete item.repositoryLocation;
      }
      if (v = item.repository || item.institution)
        item.publisher = v;
      if (scrub) {
        delete item.repository;
        delete item.institution;
      }
      if (item.legalStatus)
        item.status = item.legalStatus;
      if (scrub) {
        delete item.legalStatus;
      }
    }
    if (jurism) {
      if (item.release)
        item.edition = item.release;
      if (scrub) {
        delete item.release;
      }
      if (item.bookAbbreviation)
        item.journalAbbreviation = item.bookAbbreviation;
      if (scrub) {
        delete item.bookAbbreviation;
      }
      if (item.regulatoryBody)
        item.legislativeBody = item.regulatoryBody;
      if (scrub) {
        delete item.regulatoryBody;
      }
      if (item.treatyNumber)
        item.number = item.treatyNumber;
      if (scrub) {
        delete item.treatyNumber;
      }
      if (v = item.album || item.reporter)
        item.publicationTitle = v;
      if (scrub) {
        delete item.album;
        delete item.reporter;
      }
      if (item.assemblyNumber)
        item.seriesNumber = item.assemblyNumber;
      if (scrub) {
        delete item.assemblyNumber;
      }
      if (v = item.sessionType || item.regulationType)
        item.type = v;
      if (scrub) {
        delete item.sessionType;
        delete item.regulationType;
      }
    }
  }
  __name(unalias, "unalias");
  function simplifyForExport(item, { creators = true, dropAttachments = false, scrub = true } = {}) {
    unalias(item, { scrub });
    if (item.filingDate)
      item.filingDate = item.filingDate.replace(/^0000-00-00 /, "");
    if (creators && item.creators) {
      for (const creator of item.creators) {
        if (creator.fieldMode) {
          creator.name = creator.name || creator.lastName;
          delete creator.lastName;
          delete creator.firstName;
          delete creator.fieldMode;
        }
      }
    }
    if (item.itemType === "attachment" || item.itemType === "note") {
      delete item.attachments;
      delete item.notes;
    } else {
      item.attachments = !dropAttachments && item.attachments || [];
    }
    return item;
  }
  __name(simplifyForExport, "simplifyForExport");

  // translators/Better BibTeX Citation Key Quick Copy.ts
  var Eta = __toESM(require_browser_min_umd());
  Eta.config.autoEscape = false;
  function select_by_key(item) {
    const [, kind, lib, key] = item.uri.match(/^https?:\/\/zotero\.org\/(users|groups)\/((?:local\/)?[^/]+)\/items\/(.+)/);
    return kind === "users" ? `zotero://select/library/items/${key}` : `zotero://select/groups/${lib}/items/${key}`;
  }
  __name(select_by_key, "select_by_key");
  function select_by_citekey(item) {
    return `zotero://select/items/@${encodeURIComponent(item.citationKey)}`;
  }
  __name(select_by_citekey, "select_by_citekey");
  var Mode = {
    // eslint-disable-next-line prefer-arrow/prefer-arrow-functions
    gitbook(items) {
      const citations = items.map((item) => `{{ "${item.citationKey}" | cite }}`);
      Zotero.write(citations.join(""));
    },
    atom(items) {
      const keys = items.map((item) => item.citationKey);
      if (keys.length === 1) {
        Zotero.write(`[](#@${keys[0]})`);
      } else {
        Zotero.write(`[](?@${keys.join(", ")})`);
      }
    },
    latex(items) {
      const keys = items.map((item) => item.citationKey);
      const cmd = `${Zotero.getHiddenPref("better-bibtex.citeCommand")}`.trim();
      if (cmd === "") {
        Zotero.write(keys.join(","));
      } else {
        Zotero.write(`\\${cmd}{${keys.join(", ")}}`);
      }
    },
    citekeys(items) {
      const keys = items.map((item) => item.citationKey);
      Zotero.write(keys.join(", "));
    },
    pandoc(items) {
      let keys = items.map((item) => `@${item.citationKey}`);
      keys = keys.join("; ");
      if (Zotero.getHiddenPref("better-bibtex.quickCopyPandocBrackets"))
        keys = `[${keys}]`;
      Zotero.write(keys);
    },
    roamCiteKey(items) {
      let keys = items.map((item) => `[[@${item.citationKey}]]`);
      keys = keys.join(" ");
      Zotero.write(keys);
    },
    orgRef(items) {
      if (!items.length)
        return "";
      Zotero.write(`cite:${items.map((item) => item.citationKey).join(", ")}`);
    },
    orgRef3(items) {
      if (!items.length)
        return "";
      Zotero.write(`cite:&${items.map((item) => item.citationKey).join(";&")}`);
    },
    orgmode(items) {
      switch (Zotero.getHiddenPref("better-bibtex.quickCopyOrgMode")) {
        case "zotero":
          for (const item of items) {
            Zotero.write(`[[${select_by_key(item)}][@${item.citationKey}]]`);
          }
          break;
        case "citationkey":
          for (const item of items) {
            Zotero.write(`[[${select_by_citekey(item)}][@${item.citationKey}]]`);
          }
          break;
      }
    },
    selectlink(items) {
      switch (Zotero.getHiddenPref("better-bibtex.quickCopySelectLink")) {
        case "zotero":
          Zotero.write(items.map(select_by_key).join("\n"));
          break;
        case "citationkey":
          Zotero.write(items.map(select_by_citekey).join("\n"));
          break;
      }
    },
    rtfScan(items) {
      const reference = items.map((item) => {
        const ref = [];
        const creators = item.creators || [];
        const creator = creators[0] || {};
        let name = creator.name || creator.lastName || "no author";
        if (creators.length > 1)
          name += " et al.";
        ref.push(name);
        if (item.title)
          ref.push(JSON.stringify(item.title));
        if (item.date) {
          let date = Zotero.BetterBibTeX.parseDate(item.date);
          if (date.type === "interval")
            date = date.from;
          if (date.type === "verbatim" || !date.year) {
            ref.push(item.date);
          } else {
            ref.push(date.year);
          }
        } else {
          ref.push("no date");
        }
        return ref.join(", ");
      });
      Zotero.write(`{${reference.join("; ")}}`);
    },
    eta(items) {
      try {
        Zotero.write(Eta.render(Zotero.getHiddenPref("better-bibtex.quickCopyEta"), { items: items.map(simplifyForExport) }));
      } catch (err) {
        Zotero.write(`${err}`);
      }
    }
  };
  function doExport() {
    const items = [];
    let item;
    while (item = Zotero.nextItem()) {
      if (item.citationKey)
        items.push(item);
    }
    items.sort((a, b) => {
      const ka = [a.citationKey || a.itemType, a.dateModified || a.dateAdded, a.itemID].join("	");
      const kb = [b.citationKey || b.itemType, b.dateModified || b.dateAdded, b.itemID].join("	");
      return ka.localeCompare(kb, void 0, { sensitivity: "base" });
    });
    const mode = Mode[Zotero.getOption("quickCopyMode")] || Mode[Zotero.getHiddenPref("better-bibtex.quickCopyMode")];
    if (mode) {
      mode.call(null, items);
    } else {
      throw new Error(`Unsupported Quick Copy format '${Zotero.getOption("quickCopyMode") || Zotero.getHiddenPref("better-bibtex.quickCopyMode")}', I only know about: ${Object.keys(Mode).join(", ")}`);
    }
  }
  __name(doExport, "doExport");
  return __toCommonJS(Better_BibTeX_Citation_Key_Quick_Copy_exports);
})();
