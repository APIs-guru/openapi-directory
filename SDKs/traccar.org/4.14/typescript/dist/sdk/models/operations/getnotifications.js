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
var GetNotificationsQueryParams = /** @class */ (function (_super) {
    __extends(GetNotificationsQueryParams, _super);
    function GetNotificationsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=all" }),
        __metadata("design:type", Boolean)
    ], GetNotificationsQueryParams.prototype, "all", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=deviceId" }),
        __metadata("design:type", Number)
    ], GetNotificationsQueryParams.prototype, "deviceId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=groupId" }),
        __metadata("design:type", Number)
    ], GetNotificationsQueryParams.prototype, "groupId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=refresh" }),
        __metadata("design:type", Boolean)
    ], GetNotificationsQueryParams.prototype, "refresh", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=userId" }),
        __metadata("design:type", Number)
    ], GetNotificationsQueryParams.prototype, "userId", void 0);
    return GetNotificationsQueryParams;
}(SpeakeasyBase));
export { GetNotificationsQueryParams };
var GetNotificationsRequest = /** @class */ (function (_super) {
    __extends(GetNotificationsRequest, _super);
    function GetNotificationsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetNotificationsQueryParams)
    ], GetNotificationsRequest.prototype, "queryParams", void 0);
    return GetNotificationsRequest;
}(SpeakeasyBase));
export { GetNotificationsRequest };
var GetNotificationsResponse = /** @class */ (function (_super) {
    __extends(GetNotificationsResponse, _super);
    function GetNotificationsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetNotificationsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata({ elemType: shared.Notification }),
        __metadata("design:type", Array)
    ], GetNotificationsResponse.prototype, "notifications", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetNotificationsResponse.prototype, "statusCode", void 0);
    return GetNotificationsResponse;
}(SpeakeasyBase));
export { GetNotificationsResponse };
