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
import { ContactRequest } from "./contactrequest";
var SendMessagesRequestFilters = /** @class */ (function (_super) {
    __extends(SendMessagesRequestFilters, _super);
    function SendMessagesRequestFilters() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=attributes" }),
        __metadata("design:type", Array)
    ], SendMessagesRequestFilters.prototype, "attributes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=tags" }),
        __metadata("design:type", Array)
    ], SendMessagesRequestFilters.prototype, "tags", void 0);
    return SendMessagesRequestFilters;
}(SpeakeasyBase));
export { SendMessagesRequestFilters };
var SendMessagesRequestMedia = /** @class */ (function (_super) {
    __extends(SendMessagesRequestMedia, _super);
    function SendMessagesRequestMedia() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=url" }),
        __metadata("design:type", String)
    ], SendMessagesRequestMedia.prototype, "url", void 0);
    return SendMessagesRequestMedia;
}(SpeakeasyBase));
export { SendMessagesRequestMedia };
export var SendMessagesRequestTypeEnum;
(function (SendMessagesRequestTypeEnum) {
    SendMessagesRequestTypeEnum["Sms"] = "SMS";
    SendMessagesRequestTypeEnum["Mms"] = "MMS";
})(SendMessagesRequestTypeEnum || (SendMessagesRequestTypeEnum = {}));
var SendMessagesRequest = /** @class */ (function (_super) {
    __extends(SendMessagesRequest, _super);
    function SendMessagesRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=contacts", elemType: ContactRequest }),
        __metadata("design:type", Array)
    ], SendMessagesRequest.prototype, "contacts", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=conversationStrategy" }),
        __metadata("design:type", String)
    ], SendMessagesRequest.prototype, "conversationStrategy", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=conversations" }),
        __metadata("design:type", Array)
    ], SendMessagesRequest.prototype, "conversations", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=filters" }),
        __metadata("design:type", SendMessagesRequestFilters)
    ], SendMessagesRequest.prototype, "filters", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=media", elemType: SendMessagesRequestMedia }),
        __metadata("design:type", Array)
    ], SendMessagesRequest.prototype, "media", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=template" }),
        __metadata("design:type", String)
    ], SendMessagesRequest.prototype, "template", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], SendMessagesRequest.prototype, "type", void 0);
    return SendMessagesRequest;
}(SpeakeasyBase));
export { SendMessagesRequest };
