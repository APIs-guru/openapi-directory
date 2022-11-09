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
export var FETCHPLAYERSTREAMER_SERVERS = [
    "https://media.twilio.com",
];
var FetchPlayerStreamerPathParams = /** @class */ (function (_super) {
    __extends(FetchPlayerStreamerPathParams, _super);
    function FetchPlayerStreamerPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=Sid" }),
        __metadata("design:type", String)
    ], FetchPlayerStreamerPathParams.prototype, "sid", void 0);
    return FetchPlayerStreamerPathParams;
}(SpeakeasyBase));
export { FetchPlayerStreamerPathParams };
var FetchPlayerStreamerSecurity = /** @class */ (function (_super) {
    __extends(FetchPlayerStreamerSecurity, _super);
    function FetchPlayerStreamerSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeAccountSidAuthToken)
    ], FetchPlayerStreamerSecurity.prototype, "accountSidAuthToken", void 0);
    return FetchPlayerStreamerSecurity;
}(SpeakeasyBase));
export { FetchPlayerStreamerSecurity };
var FetchPlayerStreamerRequest = /** @class */ (function (_super) {
    __extends(FetchPlayerStreamerRequest, _super);
    function FetchPlayerStreamerRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], FetchPlayerStreamerRequest.prototype, "serverUrl", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", FetchPlayerStreamerPathParams)
    ], FetchPlayerStreamerRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", FetchPlayerStreamerSecurity)
    ], FetchPlayerStreamerRequest.prototype, "security", void 0);
    return FetchPlayerStreamerRequest;
}(SpeakeasyBase));
export { FetchPlayerStreamerRequest };
var FetchPlayerStreamerResponse = /** @class */ (function (_super) {
    __extends(FetchPlayerStreamerResponse, _super);
    function FetchPlayerStreamerResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], FetchPlayerStreamerResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], FetchPlayerStreamerResponse.prototype, "statusCode", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.MediaV1PlayerStreamer)
    ], FetchPlayerStreamerResponse.prototype, "mediaV1PlayerStreamer", void 0);
    return FetchPlayerStreamerResponse;
}(SpeakeasyBase));
export { FetchPlayerStreamerResponse };
