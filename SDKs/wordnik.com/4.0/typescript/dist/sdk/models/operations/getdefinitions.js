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
var GetDefinitionsPathParams = /** @class */ (function (_super) {
    __extends(GetDefinitionsPathParams, _super);
    function GetDefinitionsPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=word" }),
        __metadata("design:type", String)
    ], GetDefinitionsPathParams.prototype, "word", void 0);
    return GetDefinitionsPathParams;
}(SpeakeasyBase));
export { GetDefinitionsPathParams };
export var GetDefinitionsIncludeTagsEnum;
(function (GetDefinitionsIncludeTagsEnum) {
    GetDefinitionsIncludeTagsEnum["False"] = "false";
    GetDefinitionsIncludeTagsEnum["True"] = "true";
})(GetDefinitionsIncludeTagsEnum || (GetDefinitionsIncludeTagsEnum = {}));
export var GetDefinitionsPartOfSpeechEnum;
(function (GetDefinitionsPartOfSpeechEnum) {
    GetDefinitionsPartOfSpeechEnum["Noun"] = "noun";
    GetDefinitionsPartOfSpeechEnum["Adjective"] = "adjective";
    GetDefinitionsPartOfSpeechEnum["Verb"] = "verb";
    GetDefinitionsPartOfSpeechEnum["Adverb"] = "adverb";
    GetDefinitionsPartOfSpeechEnum["Interjection"] = "interjection";
    GetDefinitionsPartOfSpeechEnum["Pronoun"] = "pronoun";
    GetDefinitionsPartOfSpeechEnum["Preposition"] = "preposition";
    GetDefinitionsPartOfSpeechEnum["Abbreviation"] = "abbreviation";
    GetDefinitionsPartOfSpeechEnum["Affix"] = "affix";
    GetDefinitionsPartOfSpeechEnum["Article"] = "article";
    GetDefinitionsPartOfSpeechEnum["AuxiliaryVerb"] = "auxiliary-verb";
    GetDefinitionsPartOfSpeechEnum["Conjunction"] = "conjunction";
    GetDefinitionsPartOfSpeechEnum["DefiniteArticle"] = "definite-article";
    GetDefinitionsPartOfSpeechEnum["FamilyName"] = "family-name";
    GetDefinitionsPartOfSpeechEnum["GivenName"] = "given-name";
    GetDefinitionsPartOfSpeechEnum["Idiom"] = "idiom";
    GetDefinitionsPartOfSpeechEnum["Imperative"] = "imperative";
    GetDefinitionsPartOfSpeechEnum["NounPlural"] = "noun-plural";
    GetDefinitionsPartOfSpeechEnum["NounPosessive"] = "noun-posessive";
    GetDefinitionsPartOfSpeechEnum["PastParticiple"] = "past-participle";
    GetDefinitionsPartOfSpeechEnum["PhrasalPrefix"] = "phrasal-prefix";
    GetDefinitionsPartOfSpeechEnum["ProperNoun"] = "proper-noun";
    GetDefinitionsPartOfSpeechEnum["ProperNounPlural"] = "proper-noun-plural";
    GetDefinitionsPartOfSpeechEnum["ProperNounPosessive"] = "proper-noun-posessive";
    GetDefinitionsPartOfSpeechEnum["Suffix"] = "suffix";
    GetDefinitionsPartOfSpeechEnum["VerbIntransitive"] = "verb-intransitive";
    GetDefinitionsPartOfSpeechEnum["VerbTransitive"] = "verb-transitive";
})(GetDefinitionsPartOfSpeechEnum || (GetDefinitionsPartOfSpeechEnum = {}));
export var GetDefinitionsUseCanonicalEnum;
(function (GetDefinitionsUseCanonicalEnum) {
    GetDefinitionsUseCanonicalEnum["False"] = "false";
    GetDefinitionsUseCanonicalEnum["True"] = "true";
})(GetDefinitionsUseCanonicalEnum || (GetDefinitionsUseCanonicalEnum = {}));
var GetDefinitionsQueryParams = /** @class */ (function (_super) {
    __extends(GetDefinitionsQueryParams, _super);
    function GetDefinitionsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=includeRelated" }),
        __metadata("design:type", String)
    ], GetDefinitionsQueryParams.prototype, "includeRelated", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=includeTags" }),
        __metadata("design:type", String)
    ], GetDefinitionsQueryParams.prototype, "includeTags", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=limit" }),
        __metadata("design:type", Number)
    ], GetDefinitionsQueryParams.prototype, "limit", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=partOfSpeech" }),
        __metadata("design:type", String)
    ], GetDefinitionsQueryParams.prototype, "partOfSpeech", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=false;name=sourceDictionaries" }),
        __metadata("design:type", Array)
    ], GetDefinitionsQueryParams.prototype, "sourceDictionaries", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=useCanonical" }),
        __metadata("design:type", String)
    ], GetDefinitionsQueryParams.prototype, "useCanonical", void 0);
    return GetDefinitionsQueryParams;
}(SpeakeasyBase));
export { GetDefinitionsQueryParams };
var GetDefinitionsRequest = /** @class */ (function (_super) {
    __extends(GetDefinitionsRequest, _super);
    function GetDefinitionsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", GetDefinitionsPathParams)
    ], GetDefinitionsRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", GetDefinitionsQueryParams)
    ], GetDefinitionsRequest.prototype, "queryParams", void 0);
    return GetDefinitionsRequest;
}(SpeakeasyBase));
export { GetDefinitionsRequest };
var GetDefinitionsResponse = /** @class */ (function (_super) {
    __extends(GetDefinitionsResponse, _super);
    function GetDefinitionsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", Uint8Array)
    ], GetDefinitionsResponse.prototype, "body", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], GetDefinitionsResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], GetDefinitionsResponse.prototype, "statusCode", void 0);
    return GetDefinitionsResponse;
}(SpeakeasyBase));
export { GetDefinitionsResponse };
