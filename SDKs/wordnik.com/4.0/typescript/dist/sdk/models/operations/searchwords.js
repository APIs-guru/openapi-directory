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
var SearchWordsPathParams = /** @class */ (function (_super) {
    __extends(SearchWordsPathParams, _super);
    function SearchWordsPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=query" }),
        __metadata("design:type", String)
    ], SearchWordsPathParams.prototype, "query", void 0);
    return SearchWordsPathParams;
}(SpeakeasyBase));
export { SearchWordsPathParams };
var SearchWordsQueryParams = /** @class */ (function (_super) {
    __extends(SearchWordsQueryParams, _super);
    function SearchWordsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=allowRegex" }),
        __metadata("design:type", String)
    ], SearchWordsQueryParams.prototype, "allowRegex", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=caseSensitive" }),
        __metadata("design:type", String)
    ], SearchWordsQueryParams.prototype, "caseSensitive", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=excludePartOfSpeech" }),
        __metadata("design:type", String)
    ], SearchWordsQueryParams.prototype, "excludePartOfSpeech", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=includePartOfSpeech" }),
        __metadata("design:type", String)
    ], SearchWordsQueryParams.prototype, "includePartOfSpeech", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=limit" }),
        __metadata("design:type", Number)
    ], SearchWordsQueryParams.prototype, "limit", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=maxCorpusCount" }),
        __metadata("design:type", Number)
    ], SearchWordsQueryParams.prototype, "maxCorpusCount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=maxDictionaryCount" }),
        __metadata("design:type", Number)
    ], SearchWordsQueryParams.prototype, "maxDictionaryCount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=maxLength" }),
        __metadata("design:type", Number)
    ], SearchWordsQueryParams.prototype, "maxLength", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=minCorpusCount" }),
        __metadata("design:type", Number)
    ], SearchWordsQueryParams.prototype, "minCorpusCount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=minDictionaryCount" }),
        __metadata("design:type", Number)
    ], SearchWordsQueryParams.prototype, "minDictionaryCount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=minLength" }),
        __metadata("design:type", Number)
    ], SearchWordsQueryParams.prototype, "minLength", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=skip" }),
        __metadata("design:type", Number)
    ], SearchWordsQueryParams.prototype, "skip", void 0);
    return SearchWordsQueryParams;
}(SpeakeasyBase));
export { SearchWordsQueryParams };
var SearchWordsRequest = /** @class */ (function (_super) {
    __extends(SearchWordsRequest, _super);
    function SearchWordsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", SearchWordsPathParams)
    ], SearchWordsRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", SearchWordsQueryParams)
    ], SearchWordsRequest.prototype, "queryParams", void 0);
    return SearchWordsRequest;
}(SpeakeasyBase));
export { SearchWordsRequest };
var SearchWordsResponse = /** @class */ (function (_super) {
    __extends(SearchWordsResponse, _super);
    function SearchWordsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], SearchWordsResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], SearchWordsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], SearchWordsResponse.prototype, "statusCode", void 0);
    return SearchWordsResponse;
}(SpeakeasyBase));
export { SearchWordsResponse };
