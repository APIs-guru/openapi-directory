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
export var FETCHROOM_SERVERS = [
    "https://video.twilio.com",
];
var FetchRoomPathParams = /** @class */ (function (_super) {
    __extends(FetchRoomPathParams, _super);
    function FetchRoomPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=Sid" }),
        __metadata("design:type", String)
    ], FetchRoomPathParams.prototype, "sid", void 0);
    return FetchRoomPathParams;
}(SpeakeasyBase));
export { FetchRoomPathParams };
var FetchRoomSecurity = /** @class */ (function (_super) {
    __extends(FetchRoomSecurity, _super);
    function FetchRoomSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeAccountSidAuthToken)
    ], FetchRoomSecurity.prototype, "accountSidAuthToken", void 0);
    return FetchRoomSecurity;
}(SpeakeasyBase));
export { FetchRoomSecurity };
var FetchRoomRequest = /** @class */ (function (_super) {
    __extends(FetchRoomRequest, _super);
    function FetchRoomRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], FetchRoomRequest.prototype, "serverUrl", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", FetchRoomPathParams)
    ], FetchRoomRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", FetchRoomSecurity)
    ], FetchRoomRequest.prototype, "security", void 0);
    return FetchRoomRequest;
}(SpeakeasyBase));
export { FetchRoomRequest };
var FetchRoomResponse = /** @class */ (function (_super) {
    __extends(FetchRoomResponse, _super);
    function FetchRoomResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], FetchRoomResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], FetchRoomResponse.prototype, "statusCode", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.VideoV1Room)
    ], FetchRoomResponse.prototype, "videoV1Room", void 0);
    return FetchRoomResponse;
}(SpeakeasyBase));
export { FetchRoomResponse };
