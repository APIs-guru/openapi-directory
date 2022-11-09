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
// ThirdPartyJobInstructionThirdPartyJobInstructionEmployer
/**
 * The third party job instructions' employer
**/
var ThirdPartyJobInstructionThirdPartyJobInstructionEmployer = /** @class */ (function (_super) {
    __extends(ThirdPartyJobInstructionThirdPartyJobInstructionEmployer, _super);
    function ThirdPartyJobInstructionThirdPartyJobInstructionEmployer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=@href" }),
        __metadata("design:type", String)
    ], ThirdPartyJobInstructionThirdPartyJobInstructionEmployer.prototype, "atHref", void 0);
    __decorate([
        Metadata({ data: "json, name=@rel" }),
        __metadata("design:type", String)
    ], ThirdPartyJobInstructionThirdPartyJobInstructionEmployer.prototype, "atRel", void 0);
    __decorate([
        Metadata({ data: "json, name=@title" }),
        __metadata("design:type", String)
    ], ThirdPartyJobInstructionThirdPartyJobInstructionEmployer.prototype, "atTitle", void 0);
    return ThirdPartyJobInstructionThirdPartyJobInstructionEmployer;
}(SpeakeasyBase));
export { ThirdPartyJobInstructionThirdPartyJobInstructionEmployer };
var ThirdPartyJobInstructionThirdPartyJobInstruction = /** @class */ (function (_super) {
    __extends(ThirdPartyJobInstructionThirdPartyJobInstruction, _super);
    function ThirdPartyJobInstructionThirdPartyJobInstruction() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=ClientIdUniqueKey" }),
        __metadata("design:type", String)
    ], ThirdPartyJobInstructionThirdPartyJobInstruction.prototype, "clientIdUniqueKey", void 0);
    __decorate([
        Metadata({ data: "json, name=ClientSecretUniqueKey" }),
        __metadata("design:type", String)
    ], ThirdPartyJobInstructionThirdPartyJobInstruction.prototype, "clientSecretUniqueKey", void 0);
    __decorate([
        Metadata({ data: "json, name=Employer" }),
        __metadata("design:type", ThirdPartyJobInstructionThirdPartyJobInstructionEmployer)
    ], ThirdPartyJobInstructionThirdPartyJobInstruction.prototype, "employer", void 0);
    __decorate([
        Metadata({ data: "json, name=HoldingDate" }),
        __metadata("design:type", Date)
    ], ThirdPartyJobInstructionThirdPartyJobInstruction.prototype, "holdingDate", void 0);
    __decorate([
        Metadata({ data: "json, name=InstructionTypeName" }),
        __metadata("design:type", String)
    ], ThirdPartyJobInstructionThirdPartyJobInstruction.prototype, "instructionTypeName", void 0);
    __decorate([
        Metadata({ data: "json, name=PayScheduleUniqueKey" }),
        __metadata("design:type", String)
    ], ThirdPartyJobInstructionThirdPartyJobInstruction.prototype, "payScheduleUniqueKey", void 0);
    __decorate([
        Metadata({ data: "json, name=PaymentDate" }),
        __metadata("design:type", Date)
    ], ThirdPartyJobInstructionThirdPartyJobInstruction.prototype, "paymentDate", void 0);
    __decorate([
        Metadata({ data: "json, name=RemoteEndpoint" }),
        __metadata("design:type", String)
    ], ThirdPartyJobInstructionThirdPartyJobInstruction.prototype, "remoteEndpoint", void 0);
    return ThirdPartyJobInstructionThirdPartyJobInstruction;
}(SpeakeasyBase));
export { ThirdPartyJobInstructionThirdPartyJobInstruction };
var ThirdPartyJobInstruction = /** @class */ (function (_super) {
    __extends(ThirdPartyJobInstruction, _super);
    function ThirdPartyJobInstruction() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=ThirdPartyJobInstruction" }),
        __metadata("design:type", ThirdPartyJobInstructionThirdPartyJobInstruction)
    ], ThirdPartyJobInstruction.prototype, "thirdPartyJobInstruction", void 0);
    return ThirdPartyJobInstruction;
}(SpeakeasyBase));
export { ThirdPartyJobInstruction };
