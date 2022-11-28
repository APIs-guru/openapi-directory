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
var MessagesSendPathParams = /** @class */ (function (_super) {
    __extends(MessagesSendPathParams, _super);
    function MessagesSendPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=accountId" }),
        __metadata("design:type", String)
    ], MessagesSendPathParams.prototype, "accountId", void 0);
    return MessagesSendPathParams;
}(SpeakeasyBase));
export { MessagesSendPathParams };
var MessagesSendSecurity = /** @class */ (function (_super) {
    __extends(MessagesSendSecurity, _super);
    function MessagesSendSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeSakariAuth)
    ], MessagesSendSecurity.prototype, "sakariAuth", void 0);
    return MessagesSendSecurity;
}(SpeakeasyBase));
export { MessagesSendSecurity };
var MessagesSendRequest = /** @class */ (function (_super) {
    __extends(MessagesSendRequest, _super);
    function MessagesSendRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", MessagesSendPathParams)
    ], MessagesSendRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.SendMessagesRequest)
    ], MessagesSendRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", MessagesSendSecurity)
    ], MessagesSendRequest.prototype, "security", void 0);
    return MessagesSendRequest;
}(SpeakeasyBase));
export { MessagesSendRequest };
var MessagesSendResponse = /** @class */ (function (_super) {
    __extends(MessagesSendResponse, _super);
    function MessagesSendResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], MessagesSendResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.SendMessagesResponse)
    ], MessagesSendResponse.prototype, "sendMessagesResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], MessagesSendResponse.prototype, "statusCode", void 0);
    return MessagesSendResponse;
}(SpeakeasyBase));
export { MessagesSendResponse };
