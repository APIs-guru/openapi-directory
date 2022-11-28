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
var AccountCtrlGetLocationByIdPathParams = /** @class */ (function (_super) {
    __extends(AccountCtrlGetLocationByIdPathParams, _super);
    function AccountCtrlGetLocationByIdPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=account_id" }),
        __metadata("design:type", Number)
    ], AccountCtrlGetLocationByIdPathParams.prototype, "accountId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=location_id" }),
        __metadata("design:type", Number)
    ], AccountCtrlGetLocationByIdPathParams.prototype, "locationId", void 0);
    return AccountCtrlGetLocationByIdPathParams;
}(SpeakeasyBase));
export { AccountCtrlGetLocationByIdPathParams };
var AccountCtrlGetLocationByIdSecurity = /** @class */ (function (_super) {
    __extends(AccountCtrlGetLocationByIdSecurity, _super);
    function AccountCtrlGetLocationByIdSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" }),
        __metadata("design:type", shared.SchemeBearerAuth)
    ], AccountCtrlGetLocationByIdSecurity.prototype, "bearerAuth", void 0);
    return AccountCtrlGetLocationByIdSecurity;
}(SpeakeasyBase));
export { AccountCtrlGetLocationByIdSecurity };
var AccountCtrlGetLocationByIdRequest = /** @class */ (function (_super) {
    __extends(AccountCtrlGetLocationByIdRequest, _super);
    function AccountCtrlGetLocationByIdRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AccountCtrlGetLocationByIdPathParams)
    ], AccountCtrlGetLocationByIdRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AccountCtrlGetLocationByIdSecurity)
    ], AccountCtrlGetLocationByIdRequest.prototype, "security", void 0);
    return AccountCtrlGetLocationByIdRequest;
}(SpeakeasyBase));
export { AccountCtrlGetLocationByIdRequest };
var AccountCtrlGetLocationByIdResponse = /** @class */ (function (_super) {
    __extends(AccountCtrlGetLocationByIdResponse, _super);
    function AccountCtrlGetLocationByIdResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], AccountCtrlGetLocationByIdResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.LocationHalResponse)
    ], AccountCtrlGetLocationByIdResponse.prototype, "locationHalResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], AccountCtrlGetLocationByIdResponse.prototype, "statusCode", void 0);
    return AccountCtrlGetLocationByIdResponse;
}(SpeakeasyBase));
export { AccountCtrlGetLocationByIdResponse };
