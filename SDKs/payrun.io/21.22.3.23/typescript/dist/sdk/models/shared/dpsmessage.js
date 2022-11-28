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
export var DpsMessageDpsMessageMessageStatusEnum;
(function (DpsMessageDpsMessageMessageStatusEnum) {
    DpsMessageDpsMessageMessageStatusEnum["Retrieved"] = "Retrieved";
    DpsMessageDpsMessageMessageStatusEnum["Applied"] = "Applied";
    DpsMessageDpsMessageMessageStatusEnum["Unresolved"] = "Unresolved";
    DpsMessageDpsMessageMessageStatusEnum["Ignored"] = "Ignored";
    DpsMessageDpsMessageMessageStatusEnum["Information"] = "Information";
})(DpsMessageDpsMessageMessageStatusEnum || (DpsMessageDpsMessageMessageStatusEnum = {}));
var DpsMessageDpsMessage = /** @class */ (function (_super) {
    __extends(DpsMessageDpsMessage, _super);
    function DpsMessageDpsMessage() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=FormType" }),
        __metadata("design:type", String)
    ], DpsMessageDpsMessage.prototype, "formType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=IssueDate" }),
        __metadata("design:type", Date)
    ], DpsMessageDpsMessage.prototype, "issueDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=LastUpdated" }),
        __metadata("design:type", Date)
    ], DpsMessageDpsMessage.prototype, "lastUpdated", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Message" }),
        __metadata("design:type", String)
    ], DpsMessageDpsMessage.prototype, "message", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=MessageStatus" }),
        __metadata("design:type", String)
    ], DpsMessageDpsMessage.prototype, "messageStatus", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=MessageType" }),
        __metadata("design:type", String)
    ], DpsMessageDpsMessage.prototype, "messageType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ProcessingResult" }),
        __metadata("design:type", String)
    ], DpsMessageDpsMessage.prototype, "processingResult", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=RetrieveDate" }),
        __metadata("design:type", Date)
    ], DpsMessageDpsMessage.prototype, "retrieveDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=SequenceNumber" }),
        __metadata("design:type", Number)
    ], DpsMessageDpsMessage.prototype, "sequenceNumber", void 0);
    return DpsMessageDpsMessage;
}(SpeakeasyBase));
export { DpsMessageDpsMessage };
var DpsMessage = /** @class */ (function (_super) {
    __extends(DpsMessage, _super);
    function DpsMessage() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=DpsMessage" }),
        __metadata("design:type", DpsMessageDpsMessage)
    ], DpsMessage.prototype, "dpsMessage", void 0);
    return DpsMessage;
}(SpeakeasyBase));
export { DpsMessage };
