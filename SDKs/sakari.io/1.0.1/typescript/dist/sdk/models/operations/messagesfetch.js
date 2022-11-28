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
var MessagesFetchPathParams = /** @class */ (function (_super) {
    __extends(MessagesFetchPathParams, _super);
    function MessagesFetchPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=accountId" }),
        __metadata("design:type", String)
    ], MessagesFetchPathParams.prototype, "accountId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=messageId" }),
        __metadata("design:type", String)
    ], MessagesFetchPathParams.prototype, "messageId", void 0);
    return MessagesFetchPathParams;
}(SpeakeasyBase));
export { MessagesFetchPathParams };
var MessagesFetchSecurity = /** @class */ (function (_super) {
    __extends(MessagesFetchSecurity, _super);
    function MessagesFetchSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeSakariAuth)
    ], MessagesFetchSecurity.prototype, "sakariAuth", void 0);
    return MessagesFetchSecurity;
}(SpeakeasyBase));
export { MessagesFetchSecurity };
var MessagesFetchRequest = /** @class */ (function (_super) {
    __extends(MessagesFetchRequest, _super);
    function MessagesFetchRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", MessagesFetchPathParams)
    ], MessagesFetchRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", MessagesFetchSecurity)
    ], MessagesFetchRequest.prototype, "security", void 0);
    return MessagesFetchRequest;
}(SpeakeasyBase));
export { MessagesFetchRequest };
var MessagesFetchResponse = /** @class */ (function (_super) {
    __extends(MessagesFetchResponse, _super);
    function MessagesFetchResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], MessagesFetchResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.MessageResponse)
    ], MessagesFetchResponse.prototype, "messageResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], MessagesFetchResponse.prototype, "statusCode", void 0);
    return MessagesFetchResponse;
}(SpeakeasyBase));
export { MessagesFetchResponse };
