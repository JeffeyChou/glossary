{
	"translatorID": "0f238e69-043e-4882-93bf-342de007de19",
	"label": "Better CSL YAML",
	"description": "exports items in pandoc-compatible CSL-YAML format, with added citation keys and parsing of metadata",
	"creator": "Emiliano heyns",
	"target": "yaml",
	"minVersion": "4.0.27",
	"maxVersion": "",
	"displayOptions": {
		"keepUpdated": false,
		"worker": true
	},
	"configOptions": {
		"getCollections": true,
		"hash": "a22854212df35887ca1447c3052444f4e08f2fb1c23c06dbd0388e5efb3a7e19"
	},
	"translatorType": 3,
	"browserSupport": "gcsv",
	"priority": 800,
	"inRepository": false,
	"lastUpdated": "2023-04-08"
}

ZOTERO_CONFIG = {"GUID":"zotero@chnm.gmu.edu","ID":"zotero","CLIENT_NAME":"Zotero","DOMAIN_NAME":"zotero.org","PRODUCER":"Digital Scholar","PRODUCER_URL":"https://digitalscholar.org","REPOSITORY_URL":"https://repo.zotero.org/repo/","BASE_URI":"http://zotero.org/","WWW_BASE_URL":"https://www.zotero.org/","PROXY_AUTH_URL":"https://zoteroproxycheck.s3.amazonaws.com/test","API_URL":"https://api.zotero.org/","STREAMING_URL":"wss://stream.zotero.org/","SERVICES_URL":"https://services.zotero.org/","API_VERSION":3,"CONNECTOR_MIN_VERSION":"5.0.39","PREF_BRANCH":"extensions.zotero.","BOOKMARKLET_ORIGIN":"https://www.zotero.org","BOOKMARKLET_URL":"https://www.zotero.org/bookmarklet/","START_URL":"https://www.zotero.org/start","QUICK_START_URL":"https://www.zotero.org/support/quick_start_guide","PDF_TOOLS_URL":"https://www.zotero.org/download/xpdf/","SUPPORT_URL":"https://www.zotero.org/support/","SYNC_INFO_URL":"https://www.zotero.org/support/sync","TROUBLESHOOTING_URL":"https://www.zotero.org/support/getting_help","FEEDBACK_URL":"https://forums.zotero.org/","CONNECTORS_URL":"https://www.zotero.org/download/connectors","CHANGELOG_URL":"https://www.zotero.org/support/changelog","CREDITS_URL":"https://www.zotero.org/support/credits_and_acknowledgments","LICENSING_URL":"https://www.zotero.org/support/licensing","GET_INVOLVED_URL":"https://www.zotero.org/getinvolved","DICTIONARIES_URL":"https://download.zotero.org/dictionaries/"}

        if (typeof ZOTERO_TRANSLATOR_INFO === 'undefined') var ZOTERO_TRANSLATOR_INFO = {}; // declare if not declared
        Object.assign(ZOTERO_TRANSLATOR_INFO, {"translatorID":"0f238e69-043e-4882-93bf-342de007de19","label":"Better CSL YAML","description":"exports items in pandoc-compatible CSL-YAML format, with added citation keys and parsing of metadata","creator":"Emiliano heyns","target":"yaml","minVersion":"4.0.27","maxVersion":"","displayOptions":{"keepUpdated":false,"worker":false},"configOptions":{"getCollections":true},"translatorType":3,"browserSupport":"gcsv","priority":800,"inRepository":false}); // assign new data
      
var { detectImport, doExport, doImport } = (() => {
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
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
  var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

  // translators/Better CSL YAML.ts
  var Better_CSL_YAML_exports = {};
  __export(Better_CSL_YAML_exports, {
    detectImport: () => detectImport,
    doExport: () => doExport,
    doImport: () => doImport
  });

  // gen/preferences/meta.ts
  var names = [
    "ascii",
    "asciiBibLaTeX",
    "asciiBibTeX",
    "autoAbbrev",
    "autoAbbrevStyle",
    "autoExport",
    "autoExportDelay",
    "autoExportIdleWait",
    "autoExportPathReplaceDiacritics",
    "autoExportPathReplaceDirSep",
    "autoExportPathReplaceSpace",
    "automaticTags",
    "autoPinDelay",
    "auxImport",
    "baseAttachmentPath",
    "biblatexExtendedDateFormat",
    "biblatexExtendedNameFormat",
    "biblatexExtractEprint",
    "bibtexParticleNoOp",
    "bibtexURL",
    "cache",
    "cacheFlushInterval",
    "charmap",
    "citeCommand",
    "citekeyFold",
    "citekeyFormat",
    "citekeyFormatEditing",
    "citekeySearch",
    "citekeyUnsafeChars",
    "csquotes",
    "DOIandURL",
    "exportBibTeXStrings",
    "exportBraceProtection",
    "exportTitleCase",
    "extraMergeCitekeys",
    "extraMergeCSL",
    "extraMergeTeX",
    "git",
    "import",
    "importBibTeXStrings",
    "importCaseProtection",
    "importCitationKey",
    "importExtra",
    "importJabRefAbbreviations",
    "importJabRefStrings",
    "importNoteToExtra",
    "importSentenceCase",
    "importUnknownTexCommand",
    "itemObserverDelay",
    "jabrefFormat",
    "jieba",
    "keyConflictPolicy",
    "keyScope",
    "kuroshiro",
    "language",
    "logEvents",
    "mapMath",
    "mapText",
    "mapUnicode",
    "parseParticles",
    "patchDates",
    "platform",
    "postscript",
    "postscriptOverride",
    "preferencesOverride",
    "qualityReport",
    "quickCopyEta",
    "quickCopyMode",
    "quickCopyOrgMode",
    "quickCopyPandocBrackets",
    "quickCopySelectLink",
    "rawImports",
    "rawLaTag",
    "relativeFilePaths",
    "retainCache",
    "scrubDatabase",
    "separatorList",
    "separatorNames",
    "skipFields",
    "skipWords",
    "startupProgress",
    "strings",
    "stringsOverride",
    "testing",
    "verbatimFields",
    "warnBulkModify",
    "warnTitleCased"
  ];
  var affects = {
    "ascii": [
      "Better BibLaTeX",
      "Better BibTeX"
    ],
    "asciiBibLaTeX": [
      "Better BibLaTeX"
    ],
    "asciiBibTeX": [
      "Better BibTeX"
    ],
    "autoAbbrev": [
      "Better BibLaTeX",
      "Better BibTeX",
      "Better CSL JSON",
      "Better CSL YAML"
    ],
    "autoAbbrevStyle": [
      "Better BibLaTeX",
      "Better BibTeX",
      "Better CSL JSON",
      "Better CSL YAML"
    ],
    "automaticTags": [
      "Better BibLaTeX",
      "Better BibTeX",
      "Better CSL JSON",
      "Better CSL YAML"
    ],
    "baseAttachmentPath": [
      "Better BibLaTeX",
      "Better BibTeX",
      "Better CSL JSON",
      "Better CSL YAML"
    ],
    "biblatexExtendedDateFormat": [
      "Better BibLaTeX"
    ],
    "biblatexExtendedNameFormat": [
      "Better BibLaTeX"
    ],
    "biblatexExtractEprint": [
      "Better BibLaTeX",
      "Better BibTeX"
    ],
    "bibtexParticleNoOp": [
      "Better BibTeX"
    ],
    "bibtexURL": [
      "Better BibTeX"
    ],
    "cache": [
      "Better BibLaTeX",
      "Better BibTeX",
      "Better CSL JSON",
      "Better CSL YAML"
    ],
    "charmap": [
      "Better BibLaTeX",
      "Better BibTeX"
    ],
    "csquotes": [
      "Better BibLaTeX",
      "Better BibTeX"
    ],
    "DOIandURL": [
      "Better BibLaTeX",
      "Better BibTeX"
    ],
    "exportBibTeXStrings": [
      "Better BibLaTeX",
      "Better BibTeX"
    ],
    "exportBraceProtection": [
      "Better BibLaTeX",
      "Better BibTeX"
    ],
    "exportTitleCase": [
      "Better BibLaTeX",
      "Better BibTeX"
    ],
    "jabrefFormat": [
      "Better BibLaTeX",
      "Better BibTeX"
    ],
    "language": [
      "Better BibLaTeX",
      "Better BibTeX"
    ],
    "mapMath": [
      "Better BibLaTeX",
      "Better BibTeX"
    ],
    "mapText": [
      "Better BibLaTeX",
      "Better BibTeX"
    ],
    "mapUnicode": [
      "Better BibLaTeX",
      "Better BibTeX"
    ],
    "parseParticles": [
      "Better BibLaTeX",
      "Better BibTeX",
      "Better CSL JSON",
      "Better CSL YAML"
    ],
    "postscript": [
      "Better BibLaTeX",
      "Better BibTeX",
      "Better CSL JSON",
      "Better CSL YAML"
    ],
    "qualityReport": [
      "Better BibLaTeX",
      "Better BibTeX"
    ],
    "rawLaTag": [
      "Better BibLaTeX",
      "Better BibTeX"
    ],
    "relativeFilePaths": [
      "Better BibLaTeX",
      "Better BibTeX"
    ],
    "separatorList": [
      "Better BibLaTeX",
      "Better BibTeX"
    ],
    "separatorNames": [
      "Better BibLaTeX",
      "Better BibTeX"
    ],
    "skipFields": [
      "Better BibLaTeX",
      "Better BibTeX",
      "Better CSL JSON",
      "Better CSL YAML"
    ],
    "skipWords": [
      "Better BibLaTeX",
      "Better BibTeX"
    ],
    "strings": [
      "Better BibLaTeX",
      "Better BibTeX"
    ]
  };
  var defaults = {
    ascii: "",
    asciiBibLaTeX: false,
    asciiBibTeX: true,
    autoAbbrev: false,
    autoAbbrevStyle: "",
    autoExport: "immediate",
    autoExportDelay: 5,
    autoExportIdleWait: 10,
    autoExportPathReplaceDiacritics: false,
    autoExportPathReplaceDirSep: "-",
    autoExportPathReplaceSpace: " ",
    automaticTags: true,
    autoPinDelay: 0,
    auxImport: false,
    baseAttachmentPath: "",
    biblatexExtendedDateFormat: true,
    biblatexExtendedNameFormat: true,
    biblatexExtractEprint: true,
    bibtexParticleNoOp: false,
    bibtexURL: "off",
    cache: true,
    cacheFlushInterval: 5,
    charmap: "",
    citeCommand: "cite",
    citekeyFold: true,
    citekeyFormat: "auth.lower + shorttitle(3,3) + year",
    citekeyFormatEditing: "",
    citekeySearch: true,
    citekeyUnsafeChars: `\\"#%'(),={}~`,
    csquotes: "",
    DOIandURL: "both",
    exportBibTeXStrings: "off",
    exportBraceProtection: true,
    exportTitleCase: true,
    extraMergeCitekeys: false,
    extraMergeCSL: false,
    extraMergeTeX: false,
    git: "config",
    import: true,
    importBibTeXStrings: true,
    importCaseProtection: "as-needed",
    importCitationKey: true,
    importExtra: true,
    importJabRefAbbreviations: true,
    importJabRefStrings: true,
    importNoteToExtra: "",
    importSentenceCase: "on+guess",
    importUnknownTexCommand: "ignore",
    itemObserverDelay: 5,
    jabrefFormat: 0,
    jieba: false,
    keyConflictPolicy: "keep",
    keyScope: "library",
    kuroshiro: false,
    language: "langid",
    logEvents: false,
    mapMath: "",
    mapText: "",
    mapUnicode: "conservative",
    parseParticles: true,
    patchDates: "dateadded=dateAdded, date-added=dateAdded, datemodified=dateModified, date-modified=dateModified",
    platform: "",
    postscript: "",
    postscriptOverride: "",
    preferencesOverride: "",
    qualityReport: false,
    quickCopyEta: "",
    quickCopyMode: "latex",
    quickCopyOrgMode: "zotero",
    quickCopyPandocBrackets: false,
    quickCopySelectLink: "zotero",
    rawImports: false,
    rawLaTag: "#LaTeX",
    relativeFilePaths: false,
    retainCache: false,
    scrubDatabase: false,
    separatorList: "and",
    separatorNames: "and",
    skipFields: "",
    skipWords: "a,ab,aboard,about,above,across,after,against,al,along,amid,among,an,and,anti,around,as,at,before,behind,below,beneath,beside,besides,between,beyond,but,by,d,da,das,de,del,dell,dello,dei,degli,della,dell,delle,dem,den,der,des,despite,die,do,down,du,during,ein,eine,einem,einen,einer,eines,el,en,et,except,for,from,gli,i,il,in,inside,into,is,l,la,las,le,les,like,lo,los,near,nor,of,off,on,onto,or,over,past,per,plus,round,save,since,so,some,sur,than,the,through,to,toward,towards,un,una,unas,under,underneath,une,unlike,uno,unos,until,up,upon,versus,via,von,while,with,within,without,yet,zu,zum",
    startupProgress: "popup",
    strings: "",
    stringsOverride: "",
    testing: false,
    verbatimFields: "url,doi,file,pdf,ids,eprint,/^verb[a-z]$/,groups,/^citeulike-linkout-[0-9]+$/, /^bdsk-url-[0-9]+$/",
    warnBulkModify: 10,
    warnTitleCased: false
  };
  var schema = {
    "autoExport": {
      "preferences": [
        "asciiBibLaTeX",
        "asciiBibTeX",
        "biblatexExtendedNameFormat",
        "bibtexParticleNoOp",
        "bibtexURL",
        "DOIandURL"
      ],
      "displayOptions": [
        "exportNotes",
        "useJournalAbbreviation"
      ]
    },
    "translator": {
      "Better BibLaTeX": {
        "autoexport": {
          "type": "object",
          "additionalProperties": false,
          "properties": {
            "type": {
              "enum": [
                "collection",
                "library"
              ]
            },
            "id": {
              "type": "integer"
            },
            "path": {
              "type": "string",
              "minLength": 1
            },
            "status": {
              "enum": [
                "scheduled",
                "running",
                "done",
                "error"
              ]
            },
            "translatorID": {
              "const": "f895aa0d-f28e-47fe-b247-2ea77c6ed583"
            },
            "exportNotes": {
              "type": "boolean"
            },
            "useJournalAbbreviation": {
              "type": "boolean"
            },
            "asciiBibLaTeX": {
              "type": "boolean"
            },
            "biblatexExtendedNameFormat": {
              "type": "boolean"
            },
            "DOIandURL": {
              "enum": [
                "both",
                "doi",
                "url"
              ]
            },
            "error": {
              "type": "string"
            },
            "recursive": {
              "type": "boolean"
            },
            "meta": {
              "type": "object"
            },
            "$loki": {
              "type": "integer"
            }
          },
          "required": [
            "type",
            "id",
            "path",
            "status",
            "translatorID",
            "exportNotes",
            "useJournalAbbreviation",
            "asciiBibLaTeX",
            "biblatexExtendedNameFormat",
            "DOIandURL"
          ]
        },
        "cache": {
          "type": "object",
          "additionalProperties": false,
          "properties": {
            "itemID": {
              "type": "integer"
            },
            "entry": {
              "type": "string"
            },
            "exportNotes": {
              "type": "boolean"
            },
            "useJournalAbbreviation": {
              "type": "boolean"
            },
            "asciiBibLaTeX": {
              "type": "boolean"
            },
            "biblatexExtendedNameFormat": {
              "type": "boolean"
            },
            "DOIandURL": {
              "enum": [
                "both",
                "doi",
                "url"
              ]
            },
            "metadata": {
              "type": "object"
            },
            "meta": {
              "type": "object"
            },
            "$loki": {
              "type": "integer"
            }
          },
          "required": [
            "itemID",
            "exportNotes",
            "useJournalAbbreviation",
            "asciiBibLaTeX",
            "biblatexExtendedNameFormat",
            "DOIandURL",
            "entry"
          ]
        },
        "preferences": [
          "asciiBibLaTeX",
          "biblatexExtendedNameFormat",
          "DOIandURL"
        ],
        "displayOptions": [
          "exportNotes",
          "useJournalAbbreviation"
        ]
      },
      "Better BibTeX": {
        "autoexport": {
          "type": "object",
          "additionalProperties": false,
          "properties": {
            "type": {
              "enum": [
                "collection",
                "library"
              ]
            },
            "id": {
              "type": "integer"
            },
            "path": {
              "type": "string",
              "minLength": 1
            },
            "status": {
              "enum": [
                "scheduled",
                "running",
                "done",
                "error"
              ]
            },
            "translatorID": {
              "const": "ca65189f-8815-4afe-8c8b-8c7c15f0edca"
            },
            "exportNotes": {
              "type": "boolean"
            },
            "useJournalAbbreviation": {
              "type": "boolean"
            },
            "asciiBibTeX": {
              "type": "boolean"
            },
            "bibtexParticleNoOp": {
              "type": "boolean"
            },
            "bibtexURL": {
              "enum": [
                "off",
                "note",
                "note-url-ish",
                "url",
                "url-ish"
              ]
            },
            "DOIandURL": {
              "enum": [
                "both",
                "doi",
                "url"
              ]
            },
            "error": {
              "type": "string"
            },
            "recursive": {
              "type": "boolean"
            },
            "meta": {
              "type": "object"
            },
            "$loki": {
              "type": "integer"
            }
          },
          "required": [
            "type",
            "id",
            "path",
            "status",
            "translatorID",
            "exportNotes",
            "useJournalAbbreviation",
            "asciiBibTeX",
            "bibtexParticleNoOp",
            "bibtexURL",
            "DOIandURL"
          ]
        },
        "cache": {
          "type": "object",
          "additionalProperties": false,
          "properties": {
            "itemID": {
              "type": "integer"
            },
            "entry": {
              "type": "string"
            },
            "exportNotes": {
              "type": "boolean"
            },
            "useJournalAbbreviation": {
              "type": "boolean"
            },
            "asciiBibTeX": {
              "type": "boolean"
            },
            "bibtexParticleNoOp": {
              "type": "boolean"
            },
            "bibtexURL": {
              "enum": [
                "off",
                "note",
                "note-url-ish",
                "url",
                "url-ish"
              ]
            },
            "DOIandURL": {
              "enum": [
                "both",
                "doi",
                "url"
              ]
            },
            "metadata": {
              "type": "object"
            },
            "meta": {
              "type": "object"
            },
            "$loki": {
              "type": "integer"
            }
          },
          "required": [
            "itemID",
            "exportNotes",
            "useJournalAbbreviation",
            "asciiBibTeX",
            "bibtexParticleNoOp",
            "bibtexURL",
            "DOIandURL",
            "entry"
          ]
        },
        "preferences": [
          "asciiBibTeX",
          "bibtexParticleNoOp",
          "bibtexURL",
          "DOIandURL"
        ],
        "displayOptions": [
          "exportNotes",
          "useJournalAbbreviation"
        ]
      },
      "Better CSL JSON": {
        "autoexport": {
          "type": "object",
          "additionalProperties": false,
          "properties": {
            "type": {
              "enum": [
                "collection",
                "library"
              ]
            },
            "id": {
              "type": "integer"
            },
            "path": {
              "type": "string",
              "minLength": 1
            },
            "status": {
              "enum": [
                "scheduled",
                "running",
                "done",
                "error"
              ]
            },
            "translatorID": {
              "const": "f4b52ab0-f878-4556-85a0-c7aeedd09dfc"
            },
            "exportNotes": {
              "type": "boolean"
            },
            "useJournalAbbreviation": {
              "type": "boolean"
            },
            "error": {
              "type": "string"
            },
            "recursive": {
              "type": "boolean"
            },
            "meta": {
              "type": "object"
            },
            "$loki": {
              "type": "integer"
            }
          },
          "required": [
            "type",
            "id",
            "path",
            "status",
            "translatorID"
          ]
        },
        "cache": {
          "type": "object",
          "additionalProperties": false,
          "properties": {
            "itemID": {
              "type": "integer"
            },
            "entry": {
              "type": "string"
            },
            "exportNotes": {
              "type": "boolean"
            },
            "useJournalAbbreviation": {
              "type": "boolean"
            },
            "metadata": {
              "type": "object"
            },
            "meta": {
              "type": "object"
            },
            "$loki": {
              "type": "integer"
            }
          },
          "required": [
            "itemID",
            "exportNotes",
            "useJournalAbbreviation",
            "entry"
          ]
        },
        "preferences": [],
        "displayOptions": []
      },
      "Better CSL YAML": {
        "autoexport": {
          "type": "object",
          "additionalProperties": false,
          "properties": {
            "type": {
              "enum": [
                "collection",
                "library"
              ]
            },
            "id": {
              "type": "integer"
            },
            "path": {
              "type": "string",
              "minLength": 1
            },
            "status": {
              "enum": [
                "scheduled",
                "running",
                "done",
                "error"
              ]
            },
            "translatorID": {
              "const": "0f238e69-043e-4882-93bf-342de007de19"
            },
            "exportNotes": {
              "type": "boolean"
            },
            "useJournalAbbreviation": {
              "type": "boolean"
            },
            "error": {
              "type": "string"
            },
            "recursive": {
              "type": "boolean"
            },
            "meta": {
              "type": "object"
            },
            "$loki": {
              "type": "integer"
            }
          },
          "required": [
            "type",
            "id",
            "path",
            "status",
            "translatorID"
          ]
        },
        "cache": {
          "type": "object",
          "additionalProperties": false,
          "properties": {
            "itemID": {
              "type": "integer"
            },
            "entry": {
              "type": "string"
            },
            "exportNotes": {
              "type": "boolean"
            },
            "useJournalAbbreviation": {
              "type": "boolean"
            },
            "metadata": {
              "type": "object"
            },
            "meta": {
              "type": "object"
            },
            "$loki": {
              "type": "integer"
            }
          },
          "required": [
            "itemID",
            "exportNotes",
            "useJournalAbbreviation",
            "entry"
          ]
        },
        "preferences": [],
        "displayOptions": []
      },
      "BetterBibTeX JSON": {
        "autoexport": {
          "type": "object",
          "additionalProperties": false,
          "properties": {
            "type": {
              "enum": [
                "collection",
                "library"
              ]
            },
            "id": {
              "type": "integer"
            },
            "path": {
              "type": "string",
              "minLength": 1
            },
            "status": {
              "enum": [
                "scheduled",
                "running",
                "done",
                "error"
              ]
            },
            "translatorID": {
              "const": "36a3b0b5-bad0-4a04-b79b-441c7cef77db"
            },
            "exportNotes": {
              "type": "boolean"
            },
            "useJournalAbbreviation": {
              "type": "boolean"
            },
            "error": {
              "type": "string"
            },
            "recursive": {
              "type": "boolean"
            },
            "meta": {
              "type": "object"
            },
            "$loki": {
              "type": "integer"
            }
          },
          "required": [
            "type",
            "id",
            "path",
            "status",
            "translatorID",
            "exportNotes"
          ]
        },
        "cache": false,
        "preferences": [],
        "displayOptions": [
          "exportNotes"
        ]
      }
    }
  };

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

  // translators/lib/translator.ts
  var cacheDisabler = new class {
    get(target, property) {
      if (property === "collections") {
        target.$cacheable = false;
      }
      return target[property];
    }
    /*
    set(target, property, value): boolean {
      if (property === '$cacheable' && target.$cacheable && !value) log.debug('cache-rate: not for', target, (new Error).stack)
      target[property] = value
      return true
    }
    */
  }();
  var Items = class {
    constructor(items) {
      this.items = [];
      this.map = {};
      if (items) {
        this.items = items.map((item) => this.map[item.itemID] = this.map[item.itemKey] = new Proxy(item, cacheDisabler));
      } else {
        let item;
        while (item = Zotero.nextItem()) {
          this.items.push(this.map[item.itemID] = this.map[item.itemKey] = new Proxy(item, cacheDisabler));
        }
      }
      this.items.sort((a, b) => {
        const ka = [a.citationKey || a.itemType, a.dateModified || a.dateAdded, a.itemID].join("	");
        const kb = [b.citationKey || b.itemType, b.dateModified || b.dateAdded, b.itemID].join("	");
        return ka.localeCompare(kb, void 0, { sensitivity: "base" });
      });
    }
    erase() {
      this.items = [];
      this.map = {};
      this.current = null;
    }
    cacheable(cacheable) {
      for (const item of this.items) {
        item.$cacheable = cacheable;
      }
    }
    *[Symbol.iterator]() {
      for (const item of this.items) {
        yield item;
      }
    }
    get regular() {
      return this._regular();
    }
    *_regular() {
      for (const item of this.items) {
        switch (item.itemType) {
          case "annotation":
          case "note":
          case "attachment":
            break;
          default:
            yield this.current = item;
        }
      }
    }
  };
  __name(Items, "Items");
  var Collections = class {
    constructor(items, collections) {
      this.items = items;
      this.byKey = {};
      if (collections) {
        this.byKey = collections;
      } else if (Zotero.nextCollection) {
        let collection;
        while (collection = Zotero.nextCollection()) {
          this.registerCollection(collection, "");
        }
      }
    }
    erase() {
      this.byKey = {};
    }
    registerCollection(collection, parent) {
      const key = (collection.primary ? collection.primary : collection).key;
      if (this.byKey[key])
        return;
      this.byKey[key] = {
        key,
        parent,
        name: collection.name,
        collections: [],
        items: []
      };
      for (const child of collection.descendents || collection.children) {
        switch (child.type) {
          case "collection":
            this.byKey[key].collections.push(child.key);
            this.registerCollection(child, key);
            break;
          case "item":
            this.byKey[key].items.push(child.id);
            break;
        }
      }
    }
    get collectionTree() {
      return Object.values(this.byKey).filter((coll) => !coll.parent).map((coll) => this.nestedCollection(coll));
    }
    nestedCollection(collection) {
      const nested = {
        key: collection.key,
        name: collection.name,
        items: collection.items.map((itemID) => this.items.map[itemID]).filter((item) => item),
        collections: collection.collections.map((key) => this.nestedCollection(this.byKey[key])).filter((coll) => coll)
      };
      for (const coll of nested.collections) {
        coll.parent = nested;
      }
      return nested;
    }
  };
  __name(Collections, "Collections");
  function escapeRegExp(text) {
    return text.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&");
  }
  __name(escapeRegExp, "escapeRegExp");
  function collect() {
    const items = new Items();
    return { items, collections: new Collections(items) };
  }
  __name(collect, "collect");
  var Translation = class {
    constructor(translator) {
      this.translator = translator;
      this.export = {
        dir: void 0,
        path: void 0
      };
      this.collections = {};
      // keep because it is being used in postscripts
      this.output = {
        body: "",
        attachments: []
      };
      this.cacheable = true;
      this[translator.label.replace(/[^a-z]/ig, "")] = true;
      this.BetterTeX = this.BetterBibTeX || this.BetterBibLaTeX;
      this.BetterCSL = this.BetterCSLJSON || this.BetterCSLYAML;
      this.options = translator.displayOptions || {};
      this.platform = Zotero.getHiddenPref("better-bibtex.platform");
      this.isJurisM = client === "jurism";
      this.isZotero = !this.isJurisM;
      this.paths = {
        caseSensitive: this.platform !== "mac" && this.platform !== "win",
        sep: this.platform === "win" ? "\\" : "/"
      };
      try {
        if (Zotero.getOption("cache") === false)
          this.cacheable = false;
      } catch (err) {
      }
      for (const key in this.options) {
        if (typeof this.options[key] === "boolean") {
          this.options[key] = Zotero.getOption(key);
        } else {
          this.options[key] = !!Zotero.getOption(key);
        }
      }
      this.preferences = Object.entries(defaults).reduce((acc, [pref, dflt]) => {
        var _a2, _b;
        acc[pref] = (_b = (_a2 = this.getPreferenceOverride(pref)) != null ? _a2 : Zotero.getHiddenPref(`better-bibtex.${pref}`)) != null ? _b : dflt;
        return acc;
      }, {});
      try {
        this.preferences.texmap = JSON.parse(this.preferences.charmap);
      } catch (err) {
        this.preferences.texmap = {};
      }
      this.importToExtra = {};
      this.preferences.importNoteToExtra.toLowerCase().split(/\s*,\s*/).filter((field) => field).forEach((field) => {
        this.importToExtra[field.replace(/\s*=.*/, "")] = field.match(/\s*=\s*force$/) ? "force" : "plain";
      });
      this.skipFields = this.preferences.skipFields.toLowerCase().split(",").map((field) => this.typefield(field)).filter((s) => s);
      let m;
      if (this.skipFields.length) {
        this.skipField = new RegExp("^(" + this.skipFields.map((field) => {
          if (m = field.match(/^(csl|tex|bibtex|biblatex)[.]([-a-z]+)[.]([-a-z]+)$/)) {
            return `(${m[1] === "tex" ? "bib(la)?" : ""}[.]${m[2]}[.]${m[3]})`;
          }
          if (m = field.match(/^(tex|bibtex|biblatex)[.]([-a-z]+)$/)) {
            return `(${m[1] === "tex" ? "bib(la)?" : ""}[.][-a-z]+[.]${m[2]})`;
          }
          if (m = field.match(/^([-a-z]+)[.]([-a-z]+)$/)) {
            return `(${this.BetterTeX ? "bib(la)?tex" : "csl"}[.]${m[1]}[.]${m[2]})`;
          }
          if (m = field.match(/^[-a-z]+$/)) {
            return `(${this.BetterTeX ? "bib(la)?tex" : "csl"}[.][-a-z]+[.]${field})`;
          }
          return "";
        }).filter((field) => field).join("|") + ")$");
      }
      this.verbatimFields = this.preferences.verbatimFields.toLowerCase().split(",").map((field) => (m = field.trim().match(/^[/](.+)[/]$/)) ? new RegExp(m[1], "i") : this.typefield(field)).filter((s) => s);
      if (!this.verbatimFields.length)
        this.verbatimFields = null;
      this.csquotes = this.preferences.csquotes ? { open: this.preferences.csquotes[0], close: this.preferences.csquotes[1] } : null;
      this.preferences.testing = Zotero.getHiddenPref("better-bibtex.testing");
    }
    get exportDir() {
      this.input.items.current.$cacheable = false;
      return this.export.dir;
    }
    get exportPath() {
      this.input.items.current.$cacheable = false;
      return this.export.path;
    }
    typefield(field) {
      field = field.trim();
      if (field.startsWith("bibtex."))
        return this.BetterBibTeX ? field.replace(/^bibtex\./, "") : "";
      if (field.startsWith("biblatex."))
        return this.BetterBibLaTeX ? field.replace(/^biblatex\./, "") : "";
      return field;
    }
    static Import(translator) {
      return new this(translator);
    }
    static Export(translator, input) {
      var _a2, _b, _c, _d;
      const translation = new this(translator);
      translation.input = input;
      translation.export = {
        dir: Zotero.getOption("exportDir"),
        path: Zotero.getOption("exportPath")
      };
      if ((_a2 = translation.export.dir) == null ? void 0 : _a2.endsWith(translation.paths.sep))
        translation.export.dir = translation.export.dir.slice(0, -1);
      translation.unicode = !translation.preferences[`ascii${translator.label.replace(/Better /, "")}`] || false;
      if (translation.preferences.baseAttachmentPath && (translation.export.dir === translation.preferences.baseAttachmentPath || ((_b = translation.export.dir) == null ? void 0 : _b.startsWith(translation.preferences.baseAttachmentPath + translation.paths.sep)))) {
        translation.preferences.relativeFilePaths = true;
      }
      translation.cacheable = translation.cacheable && translation.preferences.cache && !(translation.options.exportFileData || translation.preferences.relativeFilePaths || translation.preferences.baseAttachmentPath && ((_c = translation.export.dir) == null ? void 0 : _c.startsWith(translation.preferences.baseAttachmentPath)));
      if (translation.BetterTeX) {
        translation.preferences.separatorList = translation.preferences.separatorList.trim();
        translation.preferences.separatorNames = translation.preferences.separatorNames.trim();
        translation.and = {
          list: {
            re: new RegExp(escapeRegExp(translation.preferences.separatorList), "g"),
            repl: ` {${translation.preferences.separatorList}} `
          },
          names: {
            re: new RegExp(` ${escapeRegExp(translation.preferences.separatorNames)} `, "g"),
            repl: ` {${translation.preferences.separatorNames}} `
          }
        };
        translation.preferences.separatorList = ` ${translation.preferences.separatorList} `;
        translation.preferences.separatorNames = ` ${translation.preferences.separatorNames} `;
      }
      if (translation.preferences.testing && typeof __estrace === "undefined" && ((_d = schema.translator[translator.label]) == null ? void 0 : _d.cache)) {
        const ignored = {
          testing: true,
          texmap: true
        };
        translation.preferences = new Proxy(translation.preferences, {
          set: (object, property, _value) => {
            throw new TypeError(`Unexpected set of preference ${String(property)}`);
          },
          get: (object, property) => {
            var _a3;
            if (property === "toJSON")
              return object[property];
            if (!ignored[property]) {
              if (!names.includes(property))
                throw new TypeError(`Unsupported preference ${property}`);
              if (!((_a3 = affects[property]) == null ? void 0 : _a3.includes(translator.label)))
                throw new TypeError(`Preference ${property} claims not to affect ${translator.label}`);
            }
            return object[property];
          }
        });
      }
      translation.input.items.cacheable(translation.cacheable);
      translation.collections = translation.input.collections.byKey;
      return translation;
    }
    erase() {
      this.input.items.erase();
      this.input.collections.erase();
      this.output.body = "";
      this.output.attachments = [];
    }
    saveAttachments() {
      var _a2;
      if (!((_a2 = this.output) == null ? void 0 : _a2.attachments.length))
        return;
      for (const attachment of this.output.attachments) {
        attachment.saveFile(attachment.defaultPath, true);
      }
    }
    getPreferenceOverride(pref) {
      try {
        const override = Zotero.getOption(`preference_${pref}`);
        if (typeof override !== "undefined")
          this.cacheable = false;
        return override;
      } catch (err) {
        return void 0;
      }
    }
    isVerbatimField(field) {
      return !!this.verbatimFields.find((v) => typeof v === "string" ? v === field : field.match(v));
    }
  };
  __name(Translation, "Translation");

  // translators/Better CSL YAML.ts
  function doExport() {
    const translation = Translation.Export(ZOTERO_TRANSLATOR_INFO, collect());
    Zotero.BetterBibTeX.generateCSLYAML(translation);
    Zotero.write(translation.output.body);
    translation.erase();
  }
  __name(doExport, "doExport");
  function parseInput() {
    let src = "";
    let chunk;
    while (chunk = Zotero.read(102400)) {
      src += chunk;
    }
    return Zotero.BetterBibTeX.parseCSLYAML(src);
  }
  __name(parseInput, "parseInput");
  function detectImport() {
    try {
      return !!parseInput().references;
    } catch (err) {
      return false;
    }
  }
  __name(detectImport, "detectImport");
  function fill(n, template) {
    const str = `${Math.abs(n)}`;
    const padded = `${template}${str}`;
    return `${n < 0 ? "-" : ""}${padded.slice(-Math.max(str.length, template.length))}`;
  }
  __name(fill, "fill");
  function circa(date) {
    return date.circa ? "?" : "";
  }
  __name(circa, "circa");
  var seasons = [void 0, "Spring", "Summer", "Autumn", "Winter"];
  function join(dates) {
    switch (dates.length) {
      case 0:
        return "";
      case 1:
        return dates[0];
      case 2:
        if (dates.find((date) => date.includes(" "))) {
          return dates.join(" - ");
        } else {
          return dates.join("/");
        }
      default:
        return dates.join(", ");
    }
  }
  __name(join, "join");
  function cslDate(date) {
    if (date.raw || date.literal)
      return date.raw || date.literal;
    const datepart = date["date-part"];
    if (!datepart || !datepart[0])
      return "";
    let year = datepart.unshift();
    if (!year)
      return "";
    if (year < 0)
      year += 1;
    let month = datepart.unshift();
    const day = datepart.unshift();
    let season;
    if (date.season) {
      season = date.season;
    } else {
      for (const offset of [20, 12]) {
        if (month && month > offset) {
          season = month - offset;
          month = void 0;
        }
      }
    }
    if (typeof season === "number")
      season = seasons[season] || season;
    if (typeof season === "number")
      return `${fill(year, "0000")}-${fill(season, "00")}${circa(date)}`;
    if (season)
      return `${season} ${fill(year, "0000")}`;
    if (day && month)
      return `${fill(year, "0000")}-${fill(month, "00")}-${fill(day, "0000")}${circa(date)}`;
    if (month)
      return `${fill(year, "0000")}-${fill(month, "00")}${circa(date)}`;
    return `${fill(year, "0000")}${circa(date)}`;
  }
  __name(cslDate, "cslDate");
  function yamlDate(date) {
    if (date.literal)
      return date.literal;
    if (!date.year)
      return "";
    if (date.year < 0)
      date.year += 1;
    if (!date.season) {
      for (const offset of [20, 12]) {
        if (date.month && date.month > offset) {
          date.season = date.month - offset;
          delete date.month;
        }
      }
    }
    if (typeof date.season === "number")
      date.season = seasons[date.season] || date.season;
    if (typeof date.season === "number")
      return `${fill(date.year, "0000")}-${fill(date.season, "00")}${circa(date)}`;
    if (date.season)
      return `${date.season} ${fill(date.year, "0000")}`;
    if (date.day && date.month)
      return `${fill(date.year, "0000")}-${fill(date.month, "00")}-${fill(date.day, "0000")}${circa(date)}`;
    if (date.month)
      return `${fill(date.year, "0000")}-${fill(date.month, "00")}${circa(date)}`;
    return `${fill(date.year, "0000")}${circa(date)}`;
  }
  __name(yamlDate, "yamlDate");
  async function doImport() {
    for (const source of parseInput().references) {
      const item = new Zotero.Item();
      if (!source.type)
        source.type = "article";
      Zotero.Utilities.itemFromCSLJSON(item, source);
      for (const [csl, zotero] of Object.entries({ accessed: "accessDate", issued: "date", submitted: "filingDate", "original-date": "Original date" })) {
        if (typeof source[csl] === "undefined")
          continue;
        let value;
        if (source[csl].raw || source[csl].literal) {
          value = source[csl].raw || source[csl].literal;
        } else if (source[csl]["date-parts"]) {
          value = join(source[csl]["date-parts"].map((dp) => cslDate({ ...source[csl], "date-part": dp })));
        } else if (typeof source[csl] === "number" || typeof source[csl] === "string") {
          value = source[csl];
        } else {
          value = join(source[csl].map(yamlDate));
        }
        if (zotero.includes(" ")) {
          item.extra = `${item.extra || ""}
${zotero}: ${value}`.trim();
        } else {
          item[zotero] = value;
        }
      }
      if (typeof source.id === "string" && !source.id.match(/^[0-9]+$/) && !(item.extra || "").toLowerCase().match(/(^|\n)citation key:/)) {
        item.extra = `${item.extra || ""}
Citation Key: ${source.id}`.trim();
      }
      await item.complete();
    }
  }
  __name(doImport, "doImport");
  return __toCommonJS(Better_CSL_YAML_exports);
})();
