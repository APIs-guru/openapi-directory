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
var SetVodRegionsPathParams = /** @class */ (function (_super) {
    __extends(SetVodRegionsPathParams, _super);
    function SetVodRegionsPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=ondemand_id" }),
        __metadata("design:type", Number)
    ], SetVodRegionsPathParams.prototype, "ondemandId", void 0);
    return SetVodRegionsPathParams;
}(SpeakeasyBase));
export { SetVodRegionsPathParams };
var SetVodRegionsRequestBody = /** @class */ (function (_super) {
    __extends(SetVodRegionsRequestBody, _super);
    function SetVodRegionsRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=countries" }),
        __metadata("design:type", Array)
    ], SetVodRegionsRequestBody.prototype, "countries", void 0);
    return SetVodRegionsRequestBody;
}(SpeakeasyBase));
export { SetVodRegionsRequestBody };
var SetVodRegionsSecurity = /** @class */ (function (_super) {
    __extends(SetVodRegionsSecurity, _super);
    function SetVodRegionsSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], SetVodRegionsSecurity.prototype, "oauth2", void 0);
    return SetVodRegionsSecurity;
}(SpeakeasyBase));
export { SetVodRegionsSecurity };
var SetVodRegionsRequest = /** @class */ (function (_super) {
    __extends(SetVodRegionsRequest, _super);
    function SetVodRegionsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", SetVodRegionsPathParams)
    ], SetVodRegionsRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/vnd.vimeo.ondemand.region+json" }),
        __metadata("design:type", SetVodRegionsRequestBody)
    ], SetVodRegionsRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", SetVodRegionsSecurity)
    ], SetVodRegionsRequest.prototype, "security", void 0);
    return SetVodRegionsRequest;
}(SpeakeasyBase));
export { SetVodRegionsRequest };
var SetVodRegionsResponse = /** @class */ (function (_super) {
    __extends(SetVodRegionsResponse, _super);
    function SetVodRegionsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], SetVodRegionsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], SetVodRegionsResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.LegacyError)
    ], SetVodRegionsResponse.prototype, "legacyError", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.OnDemandRegion)
    ], SetVodRegionsResponse.prototype, "onDemandRegion", void 0);
    return SetVodRegionsResponse;
}(SpeakeasyBase));
export { SetVodRegionsResponse };
