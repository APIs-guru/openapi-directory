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
import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
var GetHyphenationPathParams = /** @class */ (function (_super) {
    __extends(GetHyphenationPathParams, _super);
    function GetHyphenationPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=word" }),
        __metadata("design:type", String)
    ], GetHyphenationPathParams.prototype, "word", void 0);
    return GetHyphenationPathParams;
}(SpeakeasyBase));
export { GetHyphenationPathParams };
export var GetHyphenationSourceDictionaryEnum;
(function (GetHyphenationSourceDictionaryEnum) {
    GetHyphenationSourceDictionaryEnum["Ahd"] = "ahd";
    GetHyphenationSourceDictionaryEnum["Century"] = "century";
    GetHyphenationSourceDictionaryEnum["Wiktionary"] = "wiktionary";
    GetHyphenationSourceDictionaryEnum["Webster"] = "webster";
    GetHyphenationSourceDictionaryEnum["Wordnet"] = "wordnet";
})(GetHyphenationSourceDictionaryEnum || (GetHyphenationSourceDictionaryEnum = {}));
export var GetHyphenationUseCanonicalEnum;
(function (GetHyphenationUseCanonicalEnum) {
    GetHyphenationUseCanonicalEnum["False"] = "false";
    GetHyphenationUseCanonicalEnum["True"] = "true";
})(GetHyphenationUseCanonicalEnum || (GetHyphenationUseCanonicalEnum = {}));
var GetHyphenationQueryParams = /** @class */ (function (_super) {
    __extends(GetHyphenationQueryParams, _super);
    function GetHyphenationQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=limit" }),
        __metadata("design:type", Number)
    ], GetHyphenationQueryParams.prototype, "limit", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sourceDictionary" }),
        __metadata("design:type", String)
    ], GetHyphenationQueryParams.prototype, "sourceDictionary", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=useCanonical" }),
        __metadata("design:type", String)
    ], GetHyphenationQueryParams.prototype, "useCanonical", void 0);
    return GetHyphenationQueryParams;
}(SpeakeasyBase));
export { GetHyphenationQueryParams };
var GetHyphenationRequest = /** @class */ (function (_super) {
    __extends(GetHyphenationRequest, _super);
    function GetHyphenationRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetHyphenationPathParams)
    ], GetHyphenationRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetHyphenationQueryParams)
    ], GetHyphenationRequest.prototype, "queryParams", void 0);
    return GetHyphenationRequest;
}(SpeakeasyBase));
export { GetHyphenationRequest };
var GetHyphenationResponse = /** @class */ (function (_super) {
    __extends(GetHyphenationResponse, _super);
    function GetHyphenationResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], GetHyphenationResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetHyphenationResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetHyphenationResponse.prototype, "statusCode", void 0);
    return GetHyphenationResponse;
}(SpeakeasyBase));
export { GetHyphenationResponse };
