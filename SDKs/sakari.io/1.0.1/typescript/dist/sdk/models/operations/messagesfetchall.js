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
var MessagesFetchAllPathParams = /** @class */ (function (_super) {
    __extends(MessagesFetchAllPathParams, _super);
    function MessagesFetchAllPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=accountId" }),
        __metadata("design:type", String)
    ], MessagesFetchAllPathParams.prototype, "accountId", void 0);
    return MessagesFetchAllPathParams;
}(SpeakeasyBase));
export { MessagesFetchAllPathParams };
var MessagesFetchAllQueryParams = /** @class */ (function (_super) {
    __extends(MessagesFetchAllQueryParams, _super);
    function MessagesFetchAllQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=contactId" }),
        __metadata("design:type", String)
    ], MessagesFetchAllQueryParams.prototype, "contactId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=conversationId" }),
        __metadata("design:type", String)
    ], MessagesFetchAllQueryParams.prototype, "conversationId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=limit" }),
        __metadata("design:type", Number)
    ], MessagesFetchAllQueryParams.prototype, "limit", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=offset" }),
        __metadata("design:type", Number)
    ], MessagesFetchAllQueryParams.prototype, "offset", void 0);
    return MessagesFetchAllQueryParams;
}(SpeakeasyBase));
export { MessagesFetchAllQueryParams };
var MessagesFetchAllSecurity = /** @class */ (function (_super) {
    __extends(MessagesFetchAllSecurity, _super);
    function MessagesFetchAllSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeSakariAuth)
    ], MessagesFetchAllSecurity.prototype, "sakariAuth", void 0);
    return MessagesFetchAllSecurity;
}(SpeakeasyBase));
export { MessagesFetchAllSecurity };
var MessagesFetchAllRequest = /** @class */ (function (_super) {
    __extends(MessagesFetchAllRequest, _super);
    function MessagesFetchAllRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", MessagesFetchAllPathParams)
    ], MessagesFetchAllRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", MessagesFetchAllQueryParams)
    ], MessagesFetchAllRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", MessagesFetchAllSecurity)
    ], MessagesFetchAllRequest.prototype, "security", void 0);
    return MessagesFetchAllRequest;
}(SpeakeasyBase));
export { MessagesFetchAllRequest };
var MessagesFetchAllResponse = /** @class */ (function (_super) {
    __extends(MessagesFetchAllResponse, _super);
    function MessagesFetchAllResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], MessagesFetchAllResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.MessagesResponse)
    ], MessagesFetchAllResponse.prototype, "messagesResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], MessagesFetchAllResponse.prototype, "statusCode", void 0);
    return MessagesFetchAllResponse;
}(SpeakeasyBase));
export { MessagesFetchAllResponse };
