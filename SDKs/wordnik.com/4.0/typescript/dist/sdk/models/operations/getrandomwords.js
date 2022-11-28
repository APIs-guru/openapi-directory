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
export var GetRandomWordsSortByEnum;
(function (GetRandomWordsSortByEnum) {
    GetRandomWordsSortByEnum["Alpha"] = "alpha";
    GetRandomWordsSortByEnum["Count"] = "count";
})(GetRandomWordsSortByEnum || (GetRandomWordsSortByEnum = {}));
export var GetRandomWordsSortOrderEnum;
(function (GetRandomWordsSortOrderEnum) {
    GetRandomWordsSortOrderEnum["Asc"] = "asc";
    GetRandomWordsSortOrderEnum["Desc"] = "desc";
})(GetRandomWordsSortOrderEnum || (GetRandomWordsSortOrderEnum = {}));
var GetRandomWordsQueryParams = /** @class */ (function (_super) {
    __extends(GetRandomWordsQueryParams, _super);
    function GetRandomWordsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=excludePartOfSpeech" }),
        __metadata("design:type", String)
    ], GetRandomWordsQueryParams.prototype, "excludePartOfSpeech", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=hasDictionaryDef" }),
        __metadata("design:type", String)
    ], GetRandomWordsQueryParams.prototype, "hasDictionaryDef", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=includePartOfSpeech" }),
        __metadata("design:type", String)
    ], GetRandomWordsQueryParams.prototype, "includePartOfSpeech", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=limit" }),
        __metadata("design:type", Number)
    ], GetRandomWordsQueryParams.prototype, "limit", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=maxCorpusCount" }),
        __metadata("design:type", Number)
    ], GetRandomWordsQueryParams.prototype, "maxCorpusCount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=maxDictionaryCount" }),
        __metadata("design:type", Number)
    ], GetRandomWordsQueryParams.prototype, "maxDictionaryCount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=maxLength" }),
        __metadata("design:type", Number)
    ], GetRandomWordsQueryParams.prototype, "maxLength", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=minCorpusCount" }),
        __metadata("design:type", Number)
    ], GetRandomWordsQueryParams.prototype, "minCorpusCount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=minDictionaryCount" }),
        __metadata("design:type", Number)
    ], GetRandomWordsQueryParams.prototype, "minDictionaryCount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=minLength" }),
        __metadata("design:type", Number)
    ], GetRandomWordsQueryParams.prototype, "minLength", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sortBy" }),
        __metadata("design:type", String)
    ], GetRandomWordsQueryParams.prototype, "sortBy", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sortOrder" }),
        __metadata("design:type", String)
    ], GetRandomWordsQueryParams.prototype, "sortOrder", void 0);
    return GetRandomWordsQueryParams;
}(SpeakeasyBase));
export { GetRandomWordsQueryParams };
var GetRandomWordsRequest = /** @class */ (function (_super) {
    __extends(GetRandomWordsRequest, _super);
    function GetRandomWordsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetRandomWordsQueryParams)
    ], GetRandomWordsRequest.prototype, "queryParams", void 0);
    return GetRandomWordsRequest;
}(SpeakeasyBase));
export { GetRandomWordsRequest };
var GetRandomWordsResponse = /** @class */ (function (_super) {
    __extends(GetRandomWordsResponse, _super);
    function GetRandomWordsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], GetRandomWordsResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetRandomWordsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetRandomWordsResponse.prototype, "statusCode", void 0);
    return GetRandomWordsResponse;
}(SpeakeasyBase));
export { GetRandomWordsResponse };
