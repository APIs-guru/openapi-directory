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
export var FetchCompositionHookServerList = [
    "https://video.twilio.com",
];
var FetchCompositionHookPathParams = /** @class */ (function (_super) {
    __extends(FetchCompositionHookPathParams, _super);
    function FetchCompositionHookPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=Sid" }),
        __metadata("design:type", String)
    ], FetchCompositionHookPathParams.prototype, "sid", void 0);
    return FetchCompositionHookPathParams;
}(SpeakeasyBase));
export { FetchCompositionHookPathParams };
var FetchCompositionHookSecurity = /** @class */ (function (_super) {
    __extends(FetchCompositionHookSecurity, _super);
    function FetchCompositionHookSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeAccountSidAuthToken)
    ], FetchCompositionHookSecurity.prototype, "accountSidAuthToken", void 0);
    return FetchCompositionHookSecurity;
}(SpeakeasyBase));
export { FetchCompositionHookSecurity };
var FetchCompositionHookRequest = /** @class */ (function (_super) {
    __extends(FetchCompositionHookRequest, _super);
    function FetchCompositionHookRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], FetchCompositionHookRequest.prototype, "serverUrl", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", FetchCompositionHookPathParams)
    ], FetchCompositionHookRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", FetchCompositionHookSecurity)
    ], FetchCompositionHookRequest.prototype, "security", void 0);
    return FetchCompositionHookRequest;
}(SpeakeasyBase));
export { FetchCompositionHookRequest };
var FetchCompositionHookResponse = /** @class */ (function (_super) {
    __extends(FetchCompositionHookResponse, _super);
    function FetchCompositionHookResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], FetchCompositionHookResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], FetchCompositionHookResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.VideoV1CompositionHook)
    ], FetchCompositionHookResponse.prototype, "videoV1CompositionHook", void 0);
    return FetchCompositionHookResponse;
}(SpeakeasyBase));
export { FetchCompositionHookResponse };
