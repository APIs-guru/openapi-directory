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
export var UPDATEROOM_SERVERS = [
    "https://video.twilio.com",
];
var UpdateRoomPathParams = /** @class */ (function (_super) {
    __extends(UpdateRoomPathParams, _super);
    function UpdateRoomPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=Sid" }),
        __metadata("design:type", String)
    ], UpdateRoomPathParams.prototype, "sid", void 0);
    return UpdateRoomPathParams;
}(SpeakeasyBase));
export { UpdateRoomPathParams };
var UpdateRoomUpdateRoomRequest = /** @class */ (function (_super) {
    __extends(UpdateRoomUpdateRoomRequest, _super);
    function UpdateRoomUpdateRoomRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "form, name=Status;" }),
        __metadata("design:type", String)
    ], UpdateRoomUpdateRoomRequest.prototype, "status", void 0);
    return UpdateRoomUpdateRoomRequest;
}(SpeakeasyBase));
export { UpdateRoomUpdateRoomRequest };
var UpdateRoomSecurity = /** @class */ (function (_super) {
    __extends(UpdateRoomSecurity, _super);
    function UpdateRoomSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeAccountSidAuthToken)
    ], UpdateRoomSecurity.prototype, "accountSidAuthToken", void 0);
    return UpdateRoomSecurity;
}(SpeakeasyBase));
export { UpdateRoomSecurity };
var UpdateRoomRequest = /** @class */ (function (_super) {
    __extends(UpdateRoomRequest, _super);
    function UpdateRoomRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], UpdateRoomRequest.prototype, "serverUrl", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", UpdateRoomPathParams)
    ], UpdateRoomRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata({ data: "request, media_type=application/x-www-form-urlencoded" }),
        __metadata("design:type", UpdateRoomUpdateRoomRequest)
    ], UpdateRoomRequest.prototype, "request", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", UpdateRoomSecurity)
    ], UpdateRoomRequest.prototype, "security", void 0);
    return UpdateRoomRequest;
}(SpeakeasyBase));
export { UpdateRoomRequest };
var UpdateRoomResponse = /** @class */ (function (_super) {
    __extends(UpdateRoomResponse, _super);
    function UpdateRoomResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], UpdateRoomResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], UpdateRoomResponse.prototype, "statusCode", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.VideoV1Room)
    ], UpdateRoomResponse.prototype, "videoV1Room", void 0);
    return UpdateRoomResponse;
}(SpeakeasyBase));
export { UpdateRoomResponse };
