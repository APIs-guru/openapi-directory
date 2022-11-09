var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
export var ReverseDictionaryExcludeSourceDictionariesEnum;
(function (ReverseDictionaryExcludeSourceDictionariesEnum) {
    ReverseDictionaryExcludeSourceDictionariesEnum["Ahd"] = "ahd";
    ReverseDictionaryExcludeSourceDictionariesEnum["Century"] = "century";
    ReverseDictionaryExcludeSourceDictionariesEnum["Cmu"] = "cmu";
    ReverseDictionaryExcludeSourceDictionariesEnum["Macmillan"] = "macmillan";
    ReverseDictionaryExcludeSourceDictionariesEnum["Wiktionary"] = "wiktionary";
    ReverseDictionaryExcludeSourceDictionariesEnum["Webster"] = "webster";
    ReverseDictionaryExcludeSourceDictionariesEnum["Wordnet"] = "wordnet";
})(ReverseDictionaryExcludeSourceDictionariesEnum || (ReverseDictionaryExcludeSourceDictionariesEnum = {}));
export var ReverseDictionaryIncludeSourceDictionariesEnum;
(function (ReverseDictionaryIncludeSourceDictionariesEnum) {
    ReverseDictionaryIncludeSourceDictionariesEnum["Ahd"] = "ahd";
    ReverseDictionaryIncludeSourceDictionariesEnum["Century"] = "century";
    ReverseDictionaryIncludeSourceDictionariesEnum["Cmu"] = "cmu";
    ReverseDictionaryIncludeSourceDictionariesEnum["Macmillan"] = "macmillan";
    ReverseDictionaryIncludeSourceDictionariesEnum["Wiktionary"] = "wiktionary";
    ReverseDictionaryIncludeSourceDictionariesEnum["Webster"] = "webster";
    ReverseDictionaryIncludeSourceDictionariesEnum["Wordnet"] = "wordnet";
})(ReverseDictionaryIncludeSourceDictionariesEnum || (ReverseDictionaryIncludeSourceDictionariesEnum = {}));
export var ReverseDictionaryIncludeTagsEnum;
(function (ReverseDictionaryIncludeTagsEnum) {
    ReverseDictionaryIncludeTagsEnum["False"] = "false";
    ReverseDictionaryIncludeTagsEnum["True"] = "true";
})(ReverseDictionaryIncludeTagsEnum || (ReverseDictionaryIncludeTagsEnum = {}));
export var ReverseDictionarySortByEnum;
(function (ReverseDictionarySortByEnum) {
    ReverseDictionarySortByEnum["Alpha"] = "alpha";
    ReverseDictionarySortByEnum["Count"] = "count";
})(ReverseDictionarySortByEnum || (ReverseDictionarySortByEnum = {}));
export var ReverseDictionarySortOrderEnum;
(function (ReverseDictionarySortOrderEnum) {
    ReverseDictionarySortOrderEnum["Asc"] = "asc";
    ReverseDictionarySortOrderEnum["Desc"] = "desc";
})(ReverseDictionarySortOrderEnum || (ReverseDictionarySortOrderEnum = {}));
var ReverseDictionaryQueryParams = /** @class */ (function (_super) {
    __extends(ReverseDictionaryQueryParams, _super);
    function ReverseDictionaryQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=excludePartOfSpeech" }),
        __metadata("design:type", String)
    ], ReverseDictionaryQueryParams.prototype, "excludePartOfSpeech", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=excludeSourceDictionaries" }),
        __metadata("design:type", String)
    ], ReverseDictionaryQueryParams.prototype, "excludeSourceDictionaries", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=expandTerms" }),
        __metadata("design:type", String)
    ], ReverseDictionaryQueryParams.prototype, "expandTerms", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=findSenseForWord" }),
        __metadata("design:type", String)
    ], ReverseDictionaryQueryParams.prototype, "findSenseForWord", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=includePartOfSpeech" }),
        __metadata("design:type", String)
    ], ReverseDictionaryQueryParams.prototype, "includePartOfSpeech", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=includeSourceDictionaries" }),
        __metadata("design:type", String)
    ], ReverseDictionaryQueryParams.prototype, "includeSourceDictionaries", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=includeTags" }),
        __metadata("design:type", String)
    ], ReverseDictionaryQueryParams.prototype, "includeTags", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=limit" }),
        __metadata("design:type", Number)
    ], ReverseDictionaryQueryParams.prototype, "limit", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=maxCorpusCount" }),
        __metadata("design:type", Number)
    ], ReverseDictionaryQueryParams.prototype, "maxCorpusCount", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=maxLength" }),
        __metadata("design:type", Number)
    ], ReverseDictionaryQueryParams.prototype, "maxLength", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=minCorpusCount" }),
        __metadata("design:type", Number)
    ], ReverseDictionaryQueryParams.prototype, "minCorpusCount", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=minLength" }),
        __metadata("design:type", Number)
    ], ReverseDictionaryQueryParams.prototype, "minLength", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=query" }),
        __metadata("design:type", String)
    ], ReverseDictionaryQueryParams.prototype, "query", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=skip" }),
        __metadata("design:type", String)
    ], ReverseDictionaryQueryParams.prototype, "skip", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=sortBy" }),
        __metadata("design:type", String)
    ], ReverseDictionaryQueryParams.prototype, "sortBy", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=sortOrder" }),
        __metadata("design:type", String)
    ], ReverseDictionaryQueryParams.prototype, "sortOrder", void 0);
    return ReverseDictionaryQueryParams;
}(SpeakeasyBase));
export { ReverseDictionaryQueryParams };
var ReverseDictionaryRequest = /** @class */ (function (_super) {
    __extends(ReverseDictionaryRequest, _super);
    function ReverseDictionaryRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", ReverseDictionaryQueryParams)
    ], ReverseDictionaryRequest.prototype, "queryParams", void 0);
    return ReverseDictionaryRequest;
}(SpeakeasyBase));
export { ReverseDictionaryRequest };
var ReverseDictionaryResponse = /** @class */ (function (_super) {
    __extends(ReverseDictionaryResponse, _super);
    function ReverseDictionaryResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", Uint8Array)
    ], ReverseDictionaryResponse.prototype, "body", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], ReverseDictionaryResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], ReverseDictionaryResponse.prototype, "statusCode", void 0);
    return ReverseDictionaryResponse;
}(SpeakeasyBase));
export { ReverseDictionaryResponse };
