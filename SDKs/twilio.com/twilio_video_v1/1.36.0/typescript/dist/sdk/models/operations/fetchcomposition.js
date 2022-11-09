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
export var FETCHCOMPOSITION_SERVERS = [
    "https://video.twilio.com",
];
var FetchCompositionPathParams = /** @class */ (function (_super) {
    __extends(FetchCompositionPathParams, _super);
    function FetchCompositionPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=Sid" }),
        __metadata("design:type", String)
    ], FetchCompositionPathParams.prototype, "sid", void 0);
    return FetchCompositionPathParams;
}(SpeakeasyBase));
export { FetchCompositionPathParams };
var FetchCompositionSecurity = /** @class */ (function (_super) {
    __extends(FetchCompositionSecurity, _super);
    function FetchCompositionSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeAccountSidAuthToken)
    ], FetchCompositionSecurity.prototype, "accountSidAuthToken", void 0);
    return FetchCompositionSecurity;
}(SpeakeasyBase));
export { FetchCompositionSecurity };
var FetchCompositionRequest = /** @class */ (function (_super) {
    __extends(FetchCompositionRequest, _super);
    function FetchCompositionRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], FetchCompositionRequest.prototype, "serverUrl", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", FetchCompositionPathParams)
    ], FetchCompositionRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", FetchCompositionSecurity)
    ], FetchCompositionRequest.prototype, "security", void 0);
    return FetchCompositionRequest;
}(SpeakeasyBase));
export { FetchCompositionRequest };
var FetchCompositionResponse = /** @class */ (function (_super) {
    __extends(FetchCompositionResponse, _super);
    function FetchCompositionResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], FetchCompositionResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], FetchCompositionResponse.prototype, "statusCode", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.VideoV1Composition)
    ], FetchCompositionResponse.prototype, "videoV1Composition", void 0);
    return FetchCompositionResponse;
}(SpeakeasyBase));
export { FetchCompositionResponse };
