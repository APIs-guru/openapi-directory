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
var GetConversationsQueryParams = /** @class */ (function (_super) {
    __extends(GetConversationsQueryParams, _super);
    function GetConversationsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=category" }),
        __metadata("design:type", String)
    ], GetConversationsQueryParams.prototype, "category", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=device_pixel_ratio" }),
        __metadata("design:type", Number)
    ], GetConversationsQueryParams.prototype, "devicePixelRatio", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=include_num_unread" }),
        __metadata("design:type", Number)
    ], GetConversationsQueryParams.prototype, "includeNumUnread", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=num_messages" }),
        __metadata("design:type", Number)
    ], GetConversationsQueryParams.prototype, "numMessages", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" }),
        __metadata("design:type", Number)
    ], GetConversationsQueryParams.prototype, "page", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=per_page" }),
        __metadata("design:type", Number)
    ], GetConversationsQueryParams.prototype, "perPage", void 0);
    return GetConversationsQueryParams;
}(SpeakeasyBase));
export { GetConversationsQueryParams };
var GetConversations200ApplicationJson = /** @class */ (function (_super) {
    __extends(GetConversations200ApplicationJson, _super);
    function GetConversations200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=conversations", elemType: shared.Conversation }),
        __metadata("design:type", Array)
    ], GetConversations200ApplicationJson.prototype, "conversations", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=num_unread" }),
        __metadata("design:type", Number)
    ], GetConversations200ApplicationJson.prototype, "numUnread", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=page" }),
        __metadata("design:type", Number)
    ], GetConversations200ApplicationJson.prototype, "page", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=per_page" }),
        __metadata("design:type", Number)
    ], GetConversations200ApplicationJson.prototype, "perPage", void 0);
    return GetConversations200ApplicationJson;
}(SpeakeasyBase));
export { GetConversations200ApplicationJson };
var GetConversationsRequest = /** @class */ (function (_super) {
    __extends(GetConversationsRequest, _super);
    function GetConversationsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetConversationsQueryParams)
    ], GetConversationsRequest.prototype, "queryParams", void 0);
    return GetConversationsRequest;
}(SpeakeasyBase));
export { GetConversationsRequest };
var GetConversationsResponse = /** @class */ (function (_super) {
    __extends(GetConversationsResponse, _super);
    function GetConversationsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetConversationsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetConversationsResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetConversations200ApplicationJson)
    ], GetConversationsResponse.prototype, "getConversations200ApplicationJsonObject", void 0);
    return GetConversationsResponse;
}(SpeakeasyBase));
export { GetConversationsResponse };
