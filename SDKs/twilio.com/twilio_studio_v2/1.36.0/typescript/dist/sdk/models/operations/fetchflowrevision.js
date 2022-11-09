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
import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export var FETCHFLOWREVISION_SERVERS = [
    "https://studio.twilio.com",
];
var FetchFlowRevisionPathParams = /** @class */ (function (_super) {
    __extends(FetchFlowRevisionPathParams, _super);
    function FetchFlowRevisionPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=Revision" }),
        __metadata("design:type", String)
    ], FetchFlowRevisionPathParams.prototype, "revision", void 0);
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=Sid" }),
        __metadata("design:type", String)
    ], FetchFlowRevisionPathParams.prototype, "sid", void 0);
    return FetchFlowRevisionPathParams;
}(SpeakeasyBase));
export { FetchFlowRevisionPathParams };
var FetchFlowRevisionSecurity = /** @class */ (function (_super) {
    __extends(FetchFlowRevisionSecurity, _super);
    function FetchFlowRevisionSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeAccountSidAuthToken)
    ], FetchFlowRevisionSecurity.prototype, "accountSidAuthToken", void 0);
    return FetchFlowRevisionSecurity;
}(SpeakeasyBase));
export { FetchFlowRevisionSecurity };
var FetchFlowRevisionRequest = /** @class */ (function (_super) {
    __extends(FetchFlowRevisionRequest, _super);
    function FetchFlowRevisionRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], FetchFlowRevisionRequest.prototype, "serverUrl", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", FetchFlowRevisionPathParams)
    ], FetchFlowRevisionRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", FetchFlowRevisionSecurity)
    ], FetchFlowRevisionRequest.prototype, "security", void 0);
    return FetchFlowRevisionRequest;
}(SpeakeasyBase));
export { FetchFlowRevisionRequest };
var FetchFlowRevisionResponse = /** @class */ (function (_super) {
    __extends(FetchFlowRevisionResponse, _super);
    function FetchFlowRevisionResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], FetchFlowRevisionResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], FetchFlowRevisionResponse.prototype, "statusCode", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.StudioV2FlowFlowRevision)
    ], FetchFlowRevisionResponse.prototype, "studioV2FlowFlowRevision", void 0);
    return FetchFlowRevisionResponse;
}(SpeakeasyBase));
export { FetchFlowRevisionResponse };
