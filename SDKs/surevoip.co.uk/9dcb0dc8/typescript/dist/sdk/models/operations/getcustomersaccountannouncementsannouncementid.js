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
var GetCustomersAccountAnnouncementsAnnouncementIdPathParams = /** @class */ (function (_super) {
    __extends(GetCustomersAccountAnnouncementsAnnouncementIdPathParams, _super);
    function GetCustomersAccountAnnouncementsAnnouncementIdPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=account" }),
        __metadata("design:type", Number)
    ], GetCustomersAccountAnnouncementsAnnouncementIdPathParams.prototype, "account", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=announcement_id" }),
        __metadata("design:type", String)
    ], GetCustomersAccountAnnouncementsAnnouncementIdPathParams.prototype, "announcementId", void 0);
    return GetCustomersAccountAnnouncementsAnnouncementIdPathParams;
}(SpeakeasyBase));
export { GetCustomersAccountAnnouncementsAnnouncementIdPathParams };
var GetCustomersAccountAnnouncementsAnnouncementId404ApplicationJson = /** @class */ (function (_super) {
    __extends(GetCustomersAccountAnnouncementsAnnouncementId404ApplicationJson, _super);
    function GetCustomersAccountAnnouncementsAnnouncementId404ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], GetCustomersAccountAnnouncementsAnnouncementId404ApplicationJson.prototype, "error", void 0);
    return GetCustomersAccountAnnouncementsAnnouncementId404ApplicationJson;
}(SpeakeasyBase));
export { GetCustomersAccountAnnouncementsAnnouncementId404ApplicationJson };
var GetCustomersAccountAnnouncementsAnnouncementIdRequest = /** @class */ (function (_super) {
    __extends(GetCustomersAccountAnnouncementsAnnouncementIdRequest, _super);
    function GetCustomersAccountAnnouncementsAnnouncementIdRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetCustomersAccountAnnouncementsAnnouncementIdPathParams)
    ], GetCustomersAccountAnnouncementsAnnouncementIdRequest.prototype, "pathParams", void 0);
    return GetCustomersAccountAnnouncementsAnnouncementIdRequest;
}(SpeakeasyBase));
export { GetCustomersAccountAnnouncementsAnnouncementIdRequest };
var GetCustomersAccountAnnouncementsAnnouncementIdResponse = /** @class */ (function (_super) {
    __extends(GetCustomersAccountAnnouncementsAnnouncementIdResponse, _super);
    function GetCustomersAccountAnnouncementsAnnouncementIdResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetCustomersAccountAnnouncementsAnnouncementIdResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetCustomersAccountAnnouncementsAnnouncementId404ApplicationJson)
    ], GetCustomersAccountAnnouncementsAnnouncementIdResponse.prototype, "getCustomersAccountAnnouncementsAnnouncementId404ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetCustomersAccountAnnouncementsAnnouncementIdResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.OneannouncementsPostResponses201ContentApplication1jsonSchema)
    ], GetCustomersAccountAnnouncementsAnnouncementIdResponse.prototype, "oneannouncementsPostResponses201ContentApplication1jsonSchema", void 0);
    return GetCustomersAccountAnnouncementsAnnouncementIdResponse;
}(SpeakeasyBase));
export { GetCustomersAccountAnnouncementsAnnouncementIdResponse };
