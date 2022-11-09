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
// DpsJobInstructionDpsJobInstructionEmployer
/**
 * The dps job instructions' employer
**/
var DpsJobInstructionDpsJobInstructionEmployer = /** @class */ (function (_super) {
    __extends(DpsJobInstructionDpsJobInstructionEmployer, _super);
    function DpsJobInstructionDpsJobInstructionEmployer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=@href" }),
        __metadata("design:type", String)
    ], DpsJobInstructionDpsJobInstructionEmployer.prototype, "atHref", void 0);
    __decorate([
        Metadata({ data: "json, name=@rel" }),
        __metadata("design:type", String)
    ], DpsJobInstructionDpsJobInstructionEmployer.prototype, "atRel", void 0);
    __decorate([
        Metadata({ data: "json, name=@title" }),
        __metadata("design:type", String)
    ], DpsJobInstructionDpsJobInstructionEmployer.prototype, "atTitle", void 0);
    return DpsJobInstructionDpsJobInstructionEmployer;
}(SpeakeasyBase));
export { DpsJobInstructionDpsJobInstructionEmployer };
// DpsJobInstructionDpsJobInstructionType
/**
 * The dps job instructions' message types
**/
var DpsJobInstructionDpsJobInstructionType = /** @class */ (function (_super) {
    __extends(DpsJobInstructionDpsJobInstructionType, _super);
    function DpsJobInstructionDpsJobInstructionType() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=Type" }),
        __metadata("design:type", Array)
    ], DpsJobInstructionDpsJobInstructionType.prototype, "type", void 0);
    return DpsJobInstructionDpsJobInstructionType;
}(SpeakeasyBase));
export { DpsJobInstructionDpsJobInstructionType };
// DpsJobInstructionDpsJobInstructionMessage
/**
 * The dps job instructions' messages to process
**/
var DpsJobInstructionDpsJobInstructionMessage = /** @class */ (function (_super) {
    __extends(DpsJobInstructionDpsJobInstructionMessage, _super);
    function DpsJobInstructionDpsJobInstructionMessage() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=Message" }),
        __metadata("design:type", Array)
    ], DpsJobInstructionDpsJobInstructionMessage.prototype, "message", void 0);
    return DpsJobInstructionDpsJobInstructionMessage;
}(SpeakeasyBase));
export { DpsJobInstructionDpsJobInstructionMessage };
var DpsJobInstructionDpsJobInstruction = /** @class */ (function (_super) {
    __extends(DpsJobInstructionDpsJobInstruction, _super);
    function DpsJobInstructionDpsJobInstruction() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=Apply" }),
        __metadata("design:type", Boolean)
    ], DpsJobInstructionDpsJobInstruction.prototype, "apply", void 0);
    __decorate([
        Metadata({ data: "json, name=Employer" }),
        __metadata("design:type", DpsJobInstructionDpsJobInstructionEmployer)
    ], DpsJobInstructionDpsJobInstruction.prototype, "employer", void 0);
    __decorate([
        Metadata({ data: "json, name=FromDate" }),
        __metadata("design:type", Date)
    ], DpsJobInstructionDpsJobInstruction.prototype, "fromDate", void 0);
    __decorate([
        Metadata({ data: "json, name=HoldingDate" }),
        __metadata("design:type", Date)
    ], DpsJobInstructionDpsJobInstruction.prototype, "holdingDate", void 0);
    __decorate([
        Metadata({ data: "json, name=MessageTypes" }),
        __metadata("design:type", DpsJobInstructionDpsJobInstructionType)
    ], DpsJobInstructionDpsJobInstruction.prototype, "messageTypes", void 0);
    __decorate([
        Metadata({ data: "json, name=MessagesToProcess" }),
        __metadata("design:type", DpsJobInstructionDpsJobInstructionMessage)
    ], DpsJobInstructionDpsJobInstruction.prototype, "messagesToProcess", void 0);
    __decorate([
        Metadata({ data: "json, name=Retrieve" }),
        __metadata("design:type", Boolean)
    ], DpsJobInstructionDpsJobInstruction.prototype, "retrieve", void 0);
    return DpsJobInstructionDpsJobInstruction;
}(SpeakeasyBase));
export { DpsJobInstructionDpsJobInstruction };
var DpsJobInstruction = /** @class */ (function (_super) {
    __extends(DpsJobInstruction, _super);
    function DpsJobInstruction() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=DpsJobInstruction" }),
        __metadata("design:type", DpsJobInstructionDpsJobInstruction)
    ], DpsJobInstruction.prototype, "dpsJobInstruction", void 0);
    return DpsJobInstruction;
}(SpeakeasyBase));
export { DpsJobInstruction };
