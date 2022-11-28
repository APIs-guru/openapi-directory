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
var ConversationsFetchAllPathParams = /** @class */ (function (_super) {
    __extends(ConversationsFetchAllPathParams, _super);
    function ConversationsFetchAllPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=accountId" }),
        __metadata("design:type", String)
    ], ConversationsFetchAllPathParams.prototype, "accountId", void 0);
    return ConversationsFetchAllPathParams;
}(SpeakeasyBase));
export { ConversationsFetchAllPathParams };
var ConversationsFetchAllQueryParams = /** @class */ (function (_super) {
    __extends(ConversationsFetchAllQueryParams, _super);
    function ConversationsFetchAllQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=limit" }),
        __metadata("design:type", Number)
    ], ConversationsFetchAllQueryParams.prototype, "limit", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=offset" }),
        __metadata("design:type", Number)
    ], ConversationsFetchAllQueryParams.prototype, "offset", void 0);
    return ConversationsFetchAllQueryParams;
}(SpeakeasyBase));
export { ConversationsFetchAllQueryParams };
var ConversationsFetchAllSecurity = /** @class */ (function (_super) {
    __extends(ConversationsFetchAllSecurity, _super);
    function ConversationsFetchAllSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeSakariAuth)
    ], ConversationsFetchAllSecurity.prototype, "sakariAuth", void 0);
    return ConversationsFetchAllSecurity;
}(SpeakeasyBase));
export { ConversationsFetchAllSecurity };
var ConversationsFetchAllRequest = /** @class */ (function (_super) {
    __extends(ConversationsFetchAllRequest, _super);
    function ConversationsFetchAllRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ConversationsFetchAllPathParams)
    ], ConversationsFetchAllRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ConversationsFetchAllQueryParams)
    ], ConversationsFetchAllRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ConversationsFetchAllSecurity)
    ], ConversationsFetchAllRequest.prototype, "security", void 0);
    return ConversationsFetchAllRequest;
}(SpeakeasyBase));
export { ConversationsFetchAllRequest };
var ConversationsFetchAllResponse = /** @class */ (function (_super) {
    __extends(ConversationsFetchAllResponse, _super);
    function ConversationsFetchAllResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ConversationsFetchAllResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ConversationsResponse)
    ], ConversationsFetchAllResponse.prototype, "conversationsResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ErrorResponse)
    ], ConversationsFetchAllResponse.prototype, "errorResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ConversationsFetchAllResponse.prototype, "statusCode", void 0);
    return ConversationsFetchAllResponse;
}(SpeakeasyBase));
export { ConversationsFetchAllResponse };
