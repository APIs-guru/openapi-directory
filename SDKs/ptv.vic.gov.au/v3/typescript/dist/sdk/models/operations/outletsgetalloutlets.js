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
var OutletsGetAllOutletsQueryParams = /** @class */ (function (_super) {
    __extends(OutletsGetAllOutletsQueryParams, _super);
    function OutletsGetAllOutletsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=devid" }),
        __metadata("design:type", String)
    ], OutletsGetAllOutletsQueryParams.prototype, "devid", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=max_results" }),
        __metadata("design:type", Number)
    ], OutletsGetAllOutletsQueryParams.prototype, "maxResults", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=signature" }),
        __metadata("design:type", String)
    ], OutletsGetAllOutletsQueryParams.prototype, "signature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=token" }),
        __metadata("design:type", String)
    ], OutletsGetAllOutletsQueryParams.prototype, "token", void 0);
    return OutletsGetAllOutletsQueryParams;
}(SpeakeasyBase));
export { OutletsGetAllOutletsQueryParams };
var OutletsGetAllOutletsRequest = /** @class */ (function (_super) {
    __extends(OutletsGetAllOutletsRequest, _super);
    function OutletsGetAllOutletsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", OutletsGetAllOutletsQueryParams)
    ], OutletsGetAllOutletsRequest.prototype, "queryParams", void 0);
    return OutletsGetAllOutletsRequest;
}(SpeakeasyBase));
export { OutletsGetAllOutletsRequest };
var OutletsGetAllOutletsResponse = /** @class */ (function (_super) {
    __extends(OutletsGetAllOutletsResponse, _super);
    function OutletsGetAllOutletsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], OutletsGetAllOutletsResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], OutletsGetAllOutletsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], OutletsGetAllOutletsResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.V3ErrorResponse)
    ], OutletsGetAllOutletsResponse.prototype, "v3ErrorResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.V3OutletResponse)
    ], OutletsGetAllOutletsResponse.prototype, "v3OutletResponse", void 0);
    return OutletsGetAllOutletsResponse;
}(SpeakeasyBase));
export { OutletsGetAllOutletsResponse };
