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
var StopsStopDetailsPathParams = /** @class */ (function (_super) {
    __extends(StopsStopDetailsPathParams, _super);
    function StopsStopDetailsPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=route_type" }),
        __metadata("design:type", Number)
    ], StopsStopDetailsPathParams.prototype, "routeType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=stop_id" }),
        __metadata("design:type", Number)
    ], StopsStopDetailsPathParams.prototype, "stopId", void 0);
    return StopsStopDetailsPathParams;
}(SpeakeasyBase));
export { StopsStopDetailsPathParams };
var StopsStopDetailsQueryParams = /** @class */ (function (_super) {
    __extends(StopsStopDetailsQueryParams, _super);
    function StopsStopDetailsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=devid" }),
        __metadata("design:type", String)
    ], StopsStopDetailsQueryParams.prototype, "devid", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=gtfs" }),
        __metadata("design:type", Boolean)
    ], StopsStopDetailsQueryParams.prototype, "gtfs", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=signature" }),
        __metadata("design:type", String)
    ], StopsStopDetailsQueryParams.prototype, "signature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=stop_accessibility" }),
        __metadata("design:type", Boolean)
    ], StopsStopDetailsQueryParams.prototype, "stopAccessibility", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=stop_amenities" }),
        __metadata("design:type", Boolean)
    ], StopsStopDetailsQueryParams.prototype, "stopAmenities", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=stop_contact" }),
        __metadata("design:type", Boolean)
    ], StopsStopDetailsQueryParams.prototype, "stopContact", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=stop_disruptions" }),
        __metadata("design:type", Boolean)
    ], StopsStopDetailsQueryParams.prototype, "stopDisruptions", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=stop_location" }),
        __metadata("design:type", Boolean)
    ], StopsStopDetailsQueryParams.prototype, "stopLocation", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=stop_staffing" }),
        __metadata("design:type", Boolean)
    ], StopsStopDetailsQueryParams.prototype, "stopStaffing", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=stop_ticket" }),
        __metadata("design:type", Boolean)
    ], StopsStopDetailsQueryParams.prototype, "stopTicket", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=token" }),
        __metadata("design:type", String)
    ], StopsStopDetailsQueryParams.prototype, "token", void 0);
    return StopsStopDetailsQueryParams;
}(SpeakeasyBase));
export { StopsStopDetailsQueryParams };
var StopsStopDetailsRequest = /** @class */ (function (_super) {
    __extends(StopsStopDetailsRequest, _super);
    function StopsStopDetailsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", StopsStopDetailsPathParams)
    ], StopsStopDetailsRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", StopsStopDetailsQueryParams)
    ], StopsStopDetailsRequest.prototype, "queryParams", void 0);
    return StopsStopDetailsRequest;
}(SpeakeasyBase));
export { StopsStopDetailsRequest };
var StopsStopDetailsResponse = /** @class */ (function (_super) {
    __extends(StopsStopDetailsResponse, _super);
    function StopsStopDetailsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], StopsStopDetailsResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], StopsStopDetailsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], StopsStopDetailsResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.V3ErrorResponse)
    ], StopsStopDetailsResponse.prototype, "v3ErrorResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.V3StopResponse)
    ], StopsStopDetailsResponse.prototype, "v3StopResponse", void 0);
    return StopsStopDetailsResponse;
}(SpeakeasyBase));
export { StopsStopDetailsResponse };
