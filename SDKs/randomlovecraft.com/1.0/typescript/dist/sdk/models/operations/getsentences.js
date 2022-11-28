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
import * as shared from "../shared";
var GetSentencesQueryParams = /** @class */ (function (_super) {
    __extends(GetSentencesQueryParams, _super);
    function GetSentencesQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=limit" }),
        __metadata("design:type", Number)
    ], GetSentencesQueryParams.prototype, "limit", void 0);
    return GetSentencesQueryParams;
}(SpeakeasyBase));
export { GetSentencesQueryParams };
var GetSentences200ApplicationJson = /** @class */ (function (_super) {
    __extends(GetSentences200ApplicationJson, _super);
    function GetSentences200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=data", elemType: shared.Sentence }),
        __metadata("design:type", Array)
    ], GetSentences200ApplicationJson.prototype, "data", void 0);
    return GetSentences200ApplicationJson;
}(SpeakeasyBase));
export { GetSentences200ApplicationJson };
var GetSentencesRequest = /** @class */ (function (_super) {
    __extends(GetSentencesRequest, _super);
    function GetSentencesRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetSentencesQueryParams)
    ], GetSentencesRequest.prototype, "queryParams", void 0);
    return GetSentencesRequest;
}(SpeakeasyBase));
export { GetSentencesRequest };
var GetSentencesResponse = /** @class */ (function (_super) {
    __extends(GetSentencesResponse, _super);
    function GetSentencesResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetSentencesResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetSentencesResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetSentences200ApplicationJson)
    ], GetSentencesResponse.prototype, "getSentences200ApplicationJsonObject", void 0);
    return GetSentencesResponse;
}(SpeakeasyBase));
export { GetSentencesResponse };
