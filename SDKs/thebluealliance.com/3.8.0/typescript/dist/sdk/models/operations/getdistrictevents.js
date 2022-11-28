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
var GetDistrictEventsPathParams = /** @class */ (function (_super) {
    __extends(GetDistrictEventsPathParams, _super);
    function GetDistrictEventsPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=district_key" }),
        __metadata("design:type", String)
    ], GetDistrictEventsPathParams.prototype, "districtKey", void 0);
    return GetDistrictEventsPathParams;
}(SpeakeasyBase));
export { GetDistrictEventsPathParams };
var GetDistrictEventsHeaders = /** @class */ (function (_super) {
    __extends(GetDistrictEventsHeaders, _super);
    function GetDistrictEventsHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=If-Modified-Since" }),
        __metadata("design:type", String)
    ], GetDistrictEventsHeaders.prototype, "ifModifiedSince", void 0);
    return GetDistrictEventsHeaders;
}(SpeakeasyBase));
export { GetDistrictEventsHeaders };
var GetDistrictEventsSecurity = /** @class */ (function (_super) {
    __extends(GetDistrictEventsSecurity, _super);
    function GetDistrictEventsSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeApiKey)
    ], GetDistrictEventsSecurity.prototype, "apiKey", void 0);
    return GetDistrictEventsSecurity;
}(SpeakeasyBase));
export { GetDistrictEventsSecurity };
var GetDistrictEventsRequest = /** @class */ (function (_super) {
    __extends(GetDistrictEventsRequest, _super);
    function GetDistrictEventsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetDistrictEventsPathParams)
    ], GetDistrictEventsRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetDistrictEventsHeaders)
    ], GetDistrictEventsRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetDistrictEventsSecurity)
    ], GetDistrictEventsRequest.prototype, "security", void 0);
    return GetDistrictEventsRequest;
}(SpeakeasyBase));
export { GetDistrictEventsRequest };
var GetDistrictEventsResponse = /** @class */ (function (_super) {
    __extends(GetDistrictEventsResponse, _super);
    function GetDistrictEventsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetDistrictEventsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata({ elemType: shared.Event }),
        __metadata("design:type", Array)
    ], GetDistrictEventsResponse.prototype, "events", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], GetDistrictEventsResponse.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetDistrictEventsResponse.prototype, "statusCode", void 0);
    return GetDistrictEventsResponse;
}(SpeakeasyBase));
export { GetDistrictEventsResponse };
