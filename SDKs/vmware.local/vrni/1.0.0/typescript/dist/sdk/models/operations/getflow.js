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
var GetFlowPathParams = /** @class */ (function (_super) {
    __extends(GetFlowPathParams, _super);
    function GetFlowPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" }),
        __metadata("design:type", String)
    ], GetFlowPathParams.prototype, "id", void 0);
    return GetFlowPathParams;
}(SpeakeasyBase));
export { GetFlowPathParams };
var GetFlowQueryParams = /** @class */ (function (_super) {
    __extends(GetFlowQueryParams, _super);
    function GetFlowQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=time" }),
        __metadata("design:type", Number)
    ], GetFlowQueryParams.prototype, "time", void 0);
    return GetFlowQueryParams;
}(SpeakeasyBase));
export { GetFlowQueryParams };
var GetFlowSecurity = /** @class */ (function (_super) {
    __extends(GetFlowSecurity, _super);
    function GetFlowSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeApiKeyAuth)
    ], GetFlowSecurity.prototype, "apiKeyAuth", void 0);
    return GetFlowSecurity;
}(SpeakeasyBase));
export { GetFlowSecurity };
var GetFlowRequest = /** @class */ (function (_super) {
    __extends(GetFlowRequest, _super);
    function GetFlowRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetFlowPathParams)
    ], GetFlowRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetFlowQueryParams)
    ], GetFlowRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetFlowSecurity)
    ], GetFlowRequest.prototype, "security", void 0);
    return GetFlowRequest;
}(SpeakeasyBase));
export { GetFlowRequest };
var GetFlowResponse = /** @class */ (function (_super) {
    __extends(GetFlowResponse, _super);
    function GetFlowResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ApiError)
    ], GetFlowResponse.prototype, "apiError", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetFlowResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Flow)
    ], GetFlowResponse.prototype, "flow", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetFlowResponse.prototype, "statusCode", void 0);
    return GetFlowResponse;
}(SpeakeasyBase));
export { GetFlowResponse };
