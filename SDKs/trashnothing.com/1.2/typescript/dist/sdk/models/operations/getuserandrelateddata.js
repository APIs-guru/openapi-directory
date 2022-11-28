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
var GetUserAndRelatedDataPathParams = /** @class */ (function (_super) {
    __extends(GetUserAndRelatedDataPathParams, _super);
    function GetUserAndRelatedDataPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=user_id" }),
        __metadata("design:type", String)
    ], GetUserAndRelatedDataPathParams.prototype, "userId", void 0);
    return GetUserAndRelatedDataPathParams;
}(SpeakeasyBase));
export { GetUserAndRelatedDataPathParams };
var GetUserAndRelatedData200ApplicationJson = /** @class */ (function (_super) {
    __extends(GetUserAndRelatedData200ApplicationJson, _super);
    function GetUserAndRelatedData200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=feedback", elemType: shared.Feedback }),
        __metadata("design:type", Array)
    ], GetUserAndRelatedData200ApplicationJson.prototype, "feedback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=offer_count" }),
        __metadata("design:type", Number)
    ], GetUserAndRelatedData200ApplicationJson.prototype, "offerCount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=posts", elemType: shared.Post }),
        __metadata("design:type", Array)
    ], GetUserAndRelatedData200ApplicationJson.prototype, "posts", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=user" }),
        __metadata("design:type", shared.User)
    ], GetUserAndRelatedData200ApplicationJson.prototype, "user", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=wanted_count" }),
        __metadata("design:type", Number)
    ], GetUserAndRelatedData200ApplicationJson.prototype, "wantedCount", void 0);
    return GetUserAndRelatedData200ApplicationJson;
}(SpeakeasyBase));
export { GetUserAndRelatedData200ApplicationJson };
var GetUserAndRelatedDataRequest = /** @class */ (function (_super) {
    __extends(GetUserAndRelatedDataRequest, _super);
    function GetUserAndRelatedDataRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetUserAndRelatedDataPathParams)
    ], GetUserAndRelatedDataRequest.prototype, "pathParams", void 0);
    return GetUserAndRelatedDataRequest;
}(SpeakeasyBase));
export { GetUserAndRelatedDataRequest };
var GetUserAndRelatedDataResponse = /** @class */ (function (_super) {
    __extends(GetUserAndRelatedDataResponse, _super);
    function GetUserAndRelatedDataResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetUserAndRelatedDataResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetUserAndRelatedDataResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetUserAndRelatedData200ApplicationJson)
    ], GetUserAndRelatedDataResponse.prototype, "getUserAndRelatedData200ApplicationJsonObject", void 0);
    return GetUserAndRelatedDataResponse;
}(SpeakeasyBase));
export { GetUserAndRelatedDataResponse };
