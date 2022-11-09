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
var GetTextPronunciationsPathParams = /** @class */ (function (_super) {
    __extends(GetTextPronunciationsPathParams, _super);
    function GetTextPronunciationsPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=word" }),
        __metadata("design:type", String)
    ], GetTextPronunciationsPathParams.prototype, "word", void 0);
    return GetTextPronunciationsPathParams;
}(SpeakeasyBase));
export { GetTextPronunciationsPathParams };
export var GetTextPronunciationsSourceDictionaryEnum;
(function (GetTextPronunciationsSourceDictionaryEnum) {
    GetTextPronunciationsSourceDictionaryEnum["Ahd"] = "ahd";
    GetTextPronunciationsSourceDictionaryEnum["Century"] = "century";
    GetTextPronunciationsSourceDictionaryEnum["Cmu"] = "cmu";
    GetTextPronunciationsSourceDictionaryEnum["Macmillan"] = "macmillan";
    GetTextPronunciationsSourceDictionaryEnum["Wiktionary"] = "wiktionary";
    GetTextPronunciationsSourceDictionaryEnum["Webster"] = "webster";
    GetTextPronunciationsSourceDictionaryEnum["Wordnet"] = "wordnet";
})(GetTextPronunciationsSourceDictionaryEnum || (GetTextPronunciationsSourceDictionaryEnum = {}));
export var GetTextPronunciationsTypeFormatEnum;
(function (GetTextPronunciationsTypeFormatEnum) {
    GetTextPronunciationsTypeFormatEnum["Ahd"] = "ahd";
    GetTextPronunciationsTypeFormatEnum["Arpabet"] = "arpabet";
    GetTextPronunciationsTypeFormatEnum["GcideDiacritical"] = "gcide-diacritical";
    GetTextPronunciationsTypeFormatEnum["Ipa"] = "IPA";
})(GetTextPronunciationsTypeFormatEnum || (GetTextPronunciationsTypeFormatEnum = {}));
export var GetTextPronunciationsUseCanonicalEnum;
(function (GetTextPronunciationsUseCanonicalEnum) {
    GetTextPronunciationsUseCanonicalEnum["False"] = "false";
    GetTextPronunciationsUseCanonicalEnum["True"] = "true";
})(GetTextPronunciationsUseCanonicalEnum || (GetTextPronunciationsUseCanonicalEnum = {}));
var GetTextPronunciationsQueryParams = /** @class */ (function (_super) {
    __extends(GetTextPronunciationsQueryParams, _super);
    function GetTextPronunciationsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=limit" }),
        __metadata("design:type", Number)
    ], GetTextPronunciationsQueryParams.prototype, "limit", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=sourceDictionary" }),
        __metadata("design:type", String)
    ], GetTextPronunciationsQueryParams.prototype, "sourceDictionary", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=typeFormat" }),
        __metadata("design:type", String)
    ], GetTextPronunciationsQueryParams.prototype, "typeFormat", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=useCanonical" }),
        __metadata("design:type", String)
    ], GetTextPronunciationsQueryParams.prototype, "useCanonical", void 0);
    return GetTextPronunciationsQueryParams;
}(SpeakeasyBase));
export { GetTextPronunciationsQueryParams };
var GetTextPronunciationsRequest = /** @class */ (function (_super) {
    __extends(GetTextPronunciationsRequest, _super);
    function GetTextPronunciationsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", GetTextPronunciationsPathParams)
    ], GetTextPronunciationsRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", GetTextPronunciationsQueryParams)
    ], GetTextPronunciationsRequest.prototype, "queryParams", void 0);
    return GetTextPronunciationsRequest;
}(SpeakeasyBase));
export { GetTextPronunciationsRequest };
var GetTextPronunciationsResponse = /** @class */ (function (_super) {
    __extends(GetTextPronunciationsResponse, _super);
    function GetTextPronunciationsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", Uint8Array)
    ], GetTextPronunciationsResponse.prototype, "body", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], GetTextPronunciationsResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], GetTextPronunciationsResponse.prototype, "statusCode", void 0);
    return GetTextPronunciationsResponse;
}(SpeakeasyBase));
export { GetTextPronunciationsResponse };
