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
var OutletsGetOutletsByGeolocationPathParams = /** @class */ (function (_super) {
    __extends(OutletsGetOutletsByGeolocationPathParams, _super);
    function OutletsGetOutletsByGeolocationPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=latitude" }),
        __metadata("design:type", Number)
    ], OutletsGetOutletsByGeolocationPathParams.prototype, "latitude", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=longitude" }),
        __metadata("design:type", Number)
    ], OutletsGetOutletsByGeolocationPathParams.prototype, "longitude", void 0);
    return OutletsGetOutletsByGeolocationPathParams;
}(SpeakeasyBase));
export { OutletsGetOutletsByGeolocationPathParams };
var OutletsGetOutletsByGeolocationQueryParams = /** @class */ (function (_super) {
    __extends(OutletsGetOutletsByGeolocationQueryParams, _super);
    function OutletsGetOutletsByGeolocationQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=devid" }),
        __metadata("design:type", String)
    ], OutletsGetOutletsByGeolocationQueryParams.prototype, "devid", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=max_distance" }),
        __metadata("design:type", Number)
    ], OutletsGetOutletsByGeolocationQueryParams.prototype, "maxDistance", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=max_results" }),
        __metadata("design:type", Number)
    ], OutletsGetOutletsByGeolocationQueryParams.prototype, "maxResults", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=signature" }),
        __metadata("design:type", String)
    ], OutletsGetOutletsByGeolocationQueryParams.prototype, "signature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=token" }),
        __metadata("design:type", String)
    ], OutletsGetOutletsByGeolocationQueryParams.prototype, "token", void 0);
    return OutletsGetOutletsByGeolocationQueryParams;
}(SpeakeasyBase));
export { OutletsGetOutletsByGeolocationQueryParams };
var OutletsGetOutletsByGeolocationRequest = /** @class */ (function (_super) {
    __extends(OutletsGetOutletsByGeolocationRequest, _super);
    function OutletsGetOutletsByGeolocationRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", OutletsGetOutletsByGeolocationPathParams)
    ], OutletsGetOutletsByGeolocationRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", OutletsGetOutletsByGeolocationQueryParams)
    ], OutletsGetOutletsByGeolocationRequest.prototype, "queryParams", void 0);
    return OutletsGetOutletsByGeolocationRequest;
}(SpeakeasyBase));
export { OutletsGetOutletsByGeolocationRequest };
var OutletsGetOutletsByGeolocationResponse = /** @class */ (function (_super) {
    __extends(OutletsGetOutletsByGeolocationResponse, _super);
    function OutletsGetOutletsByGeolocationResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], OutletsGetOutletsByGeolocationResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], OutletsGetOutletsByGeolocationResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], OutletsGetOutletsByGeolocationResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.V3ErrorResponse)
    ], OutletsGetOutletsByGeolocationResponse.prototype, "v3ErrorResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.V3OutletGeolocationResponse)
    ], OutletsGetOutletsByGeolocationResponse.prototype, "v3OutletGeolocationResponse", void 0);
    return OutletsGetOutletsByGeolocationResponse;
}(SpeakeasyBase));
export { OutletsGetOutletsByGeolocationResponse };
