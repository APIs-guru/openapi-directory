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
var GetConversationMessagesPathParams = /** @class */ (function (_super) {
    __extends(GetConversationMessagesPathParams, _super);
    function GetConversationMessagesPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=conversation_id" }),
        __metadata("design:type", String)
    ], GetConversationMessagesPathParams.prototype, "conversationId", void 0);
    return GetConversationMessagesPathParams;
}(SpeakeasyBase));
export { GetConversationMessagesPathParams };
var GetConversationMessagesQueryParams = /** @class */ (function (_super) {
    __extends(GetConversationMessagesQueryParams, _super);
    function GetConversationMessagesQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=device_pixel_ratio" }),
        __metadata("design:type", Number)
    ], GetConversationMessagesQueryParams.prototype, "devicePixelRatio", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=include_conversation" }),
        __metadata("design:type", Number)
    ], GetConversationMessagesQueryParams.prototype, "includeConversation", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" }),
        __metadata("design:type", Number)
    ], GetConversationMessagesQueryParams.prototype, "page", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=per_page" }),
        __metadata("design:type", Number)
    ], GetConversationMessagesQueryParams.prototype, "perPage", void 0);
    return GetConversationMessagesQueryParams;
}(SpeakeasyBase));
export { GetConversationMessagesQueryParams };
var GetConversationMessages200ApplicationJson = /** @class */ (function (_super) {
    __extends(GetConversationMessages200ApplicationJson, _super);
    function GetConversationMessages200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=conversation" }),
        __metadata("design:type", shared.Conversation)
    ], GetConversationMessages200ApplicationJson.prototype, "conversation", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=messages", elemType: shared.Message }),
        __metadata("design:type", Array)
    ], GetConversationMessages200ApplicationJson.prototype, "messages", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=page" }),
        __metadata("design:type", Number)
    ], GetConversationMessages200ApplicationJson.prototype, "page", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=per_page" }),
        __metadata("design:type", Number)
    ], GetConversationMessages200ApplicationJson.prototype, "perPage", void 0);
    return GetConversationMessages200ApplicationJson;
}(SpeakeasyBase));
export { GetConversationMessages200ApplicationJson };
var GetConversationMessagesRequest = /** @class */ (function (_super) {
    __extends(GetConversationMessagesRequest, _super);
    function GetConversationMessagesRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetConversationMessagesPathParams)
    ], GetConversationMessagesRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetConversationMessagesQueryParams)
    ], GetConversationMessagesRequest.prototype, "queryParams", void 0);
    return GetConversationMessagesRequest;
}(SpeakeasyBase));
export { GetConversationMessagesRequest };
var GetConversationMessagesResponse = /** @class */ (function (_super) {
    __extends(GetConversationMessagesResponse, _super);
    function GetConversationMessagesResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetConversationMessagesResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetConversationMessagesResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetConversationMessages200ApplicationJson)
    ], GetConversationMessagesResponse.prototype, "getConversationMessages200ApplicationJsonObject", void 0);
    return GetConversationMessagesResponse;
}(SpeakeasyBase));
export { GetConversationMessagesResponse };
