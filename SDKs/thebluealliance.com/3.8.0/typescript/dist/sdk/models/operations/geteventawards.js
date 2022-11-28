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
var GetEventAwardsPathParams = /** @class */ (function (_super) {
    __extends(GetEventAwardsPathParams, _super);
    function GetEventAwardsPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=event_key" }),
        __metadata("design:type", String)
    ], GetEventAwardsPathParams.prototype, "eventKey", void 0);
    return GetEventAwardsPathParams;
}(SpeakeasyBase));
export { GetEventAwardsPathParams };
var GetEventAwardsHeaders = /** @class */ (function (_super) {
    __extends(GetEventAwardsHeaders, _super);
    function GetEventAwardsHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=If-Modified-Since" }),
        __metadata("design:type", String)
    ], GetEventAwardsHeaders.prototype, "ifModifiedSince", void 0);
    return GetEventAwardsHeaders;
}(SpeakeasyBase));
export { GetEventAwardsHeaders };
var GetEventAwardsSecurity = /** @class */ (function (_super) {
    __extends(GetEventAwardsSecurity, _super);
    function GetEventAwardsSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeApiKey)
    ], GetEventAwardsSecurity.prototype, "apiKey", void 0);
    return GetEventAwardsSecurity;
}(SpeakeasyBase));
export { GetEventAwardsSecurity };
var GetEventAwardsRequest = /** @class */ (function (_super) {
    __extends(GetEventAwardsRequest, _super);
    function GetEventAwardsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetEventAwardsPathParams)
    ], GetEventAwardsRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetEventAwardsHeaders)
    ], GetEventAwardsRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetEventAwardsSecurity)
    ], GetEventAwardsRequest.prototype, "security", void 0);
    return GetEventAwardsRequest;
}(SpeakeasyBase));
export { GetEventAwardsRequest };
var GetEventAwardsResponse = /** @class */ (function (_super) {
    __extends(GetEventAwardsResponse, _super);
    function GetEventAwardsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ elemType: shared.Award }),
        __metadata("design:type", Array)
    ], GetEventAwardsResponse.prototype, "awards", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetEventAwardsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], GetEventAwardsResponse.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetEventAwardsResponse.prototype, "statusCode", void 0);
    return GetEventAwardsResponse;
}(SpeakeasyBase));
export { GetEventAwardsResponse };
