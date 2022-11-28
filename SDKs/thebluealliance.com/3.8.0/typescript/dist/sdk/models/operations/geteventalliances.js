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
var GetEventAlliancesPathParams = /** @class */ (function (_super) {
    __extends(GetEventAlliancesPathParams, _super);
    function GetEventAlliancesPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=event_key" }),
        __metadata("design:type", String)
    ], GetEventAlliancesPathParams.prototype, "eventKey", void 0);
    return GetEventAlliancesPathParams;
}(SpeakeasyBase));
export { GetEventAlliancesPathParams };
var GetEventAlliancesHeaders = /** @class */ (function (_super) {
    __extends(GetEventAlliancesHeaders, _super);
    function GetEventAlliancesHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=If-Modified-Since" }),
        __metadata("design:type", String)
    ], GetEventAlliancesHeaders.prototype, "ifModifiedSince", void 0);
    return GetEventAlliancesHeaders;
}(SpeakeasyBase));
export { GetEventAlliancesHeaders };
var GetEventAlliancesSecurity = /** @class */ (function (_super) {
    __extends(GetEventAlliancesSecurity, _super);
    function GetEventAlliancesSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeApiKey)
    ], GetEventAlliancesSecurity.prototype, "apiKey", void 0);
    return GetEventAlliancesSecurity;
}(SpeakeasyBase));
export { GetEventAlliancesSecurity };
var GetEventAlliancesRequest = /** @class */ (function (_super) {
    __extends(GetEventAlliancesRequest, _super);
    function GetEventAlliancesRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetEventAlliancesPathParams)
    ], GetEventAlliancesRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetEventAlliancesHeaders)
    ], GetEventAlliancesRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetEventAlliancesSecurity)
    ], GetEventAlliancesRequest.prototype, "security", void 0);
    return GetEventAlliancesRequest;
}(SpeakeasyBase));
export { GetEventAlliancesRequest };
var GetEventAlliancesResponse = /** @class */ (function (_super) {
    __extends(GetEventAlliancesResponse, _super);
    function GetEventAlliancesResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetEventAlliancesResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata({ elemType: shared.EliminationAlliance }),
        __metadata("design:type", Array)
    ], GetEventAlliancesResponse.prototype, "eliminationAlliances", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], GetEventAlliancesResponse.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetEventAlliancesResponse.prototype, "statusCode", void 0);
    return GetEventAlliancesResponse;
}(SpeakeasyBase));
export { GetEventAlliancesResponse };
