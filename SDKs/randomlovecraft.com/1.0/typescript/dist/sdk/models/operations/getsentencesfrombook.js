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
var GetSentencesFromBookPathParams = /** @class */ (function (_super) {
    __extends(GetSentencesFromBookPathParams, _super);
    function GetSentencesFromBookPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" }),
        __metadata("design:type", String)
    ], GetSentencesFromBookPathParams.prototype, "id", void 0);
    return GetSentencesFromBookPathParams;
}(SpeakeasyBase));
export { GetSentencesFromBookPathParams };
var GetSentencesFromBookQueryParams = /** @class */ (function (_super) {
    __extends(GetSentencesFromBookQueryParams, _super);
    function GetSentencesFromBookQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=limit" }),
        __metadata("design:type", Number)
    ], GetSentencesFromBookQueryParams.prototype, "limit", void 0);
    return GetSentencesFromBookQueryParams;
}(SpeakeasyBase));
export { GetSentencesFromBookQueryParams };
var GetSentencesFromBook200ApplicationJson = /** @class */ (function (_super) {
    __extends(GetSentencesFromBook200ApplicationJson, _super);
    function GetSentencesFromBook200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=data", elemType: shared.Sentence }),
        __metadata("design:type", Array)
    ], GetSentencesFromBook200ApplicationJson.prototype, "data", void 0);
    return GetSentencesFromBook200ApplicationJson;
}(SpeakeasyBase));
export { GetSentencesFromBook200ApplicationJson };
var GetSentencesFromBookRequest = /** @class */ (function (_super) {
    __extends(GetSentencesFromBookRequest, _super);
    function GetSentencesFromBookRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetSentencesFromBookPathParams)
    ], GetSentencesFromBookRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetSentencesFromBookQueryParams)
    ], GetSentencesFromBookRequest.prototype, "queryParams", void 0);
    return GetSentencesFromBookRequest;
}(SpeakeasyBase));
export { GetSentencesFromBookRequest };
var GetSentencesFromBookResponse = /** @class */ (function (_super) {
    __extends(GetSentencesFromBookResponse, _super);
    function GetSentencesFromBookResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetSentencesFromBookResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetSentencesFromBookResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetSentencesFromBook200ApplicationJson)
    ], GetSentencesFromBookResponse.prototype, "getSentencesFromBook200ApplicationJsonObject", void 0);
    return GetSentencesFromBookResponse;
}(SpeakeasyBase));
export { GetSentencesFromBookResponse };
