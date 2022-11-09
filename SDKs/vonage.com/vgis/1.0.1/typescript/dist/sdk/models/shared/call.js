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
export var CallDirectionEnum;
(function (CallDirectionEnum) {
    CallDirectionEnum["Inbound"] = "INBOUND";
    CallDirectionEnum["Outbound"] = "OUTBOUND";
})(CallDirectionEnum || (CallDirectionEnum = {}));
export var CallStateEnum;
(function (CallStateEnum) {
    CallStateEnum["Initializing"] = "INITIALIZING";
    CallStateEnum["Ringing"] = "RINGING";
    CallStateEnum["Active"] = "ACTIVE";
    CallStateEnum["Held"] = "HELD";
    CallStateEnum["RemoteHeld"] = "REMOTE_HELD";
    CallStateEnum["Detached"] = "DETACHED";
    CallStateEnum["Rejected"] = "REJECTED";
    CallStateEnum["Cancelled"] = "CANCELLED";
    CallStateEnum["Answered"] = "ANSWERED";
    CallStateEnum["Missed"] = "MISSED";
})(CallStateEnum || (CallStateEnum = {}));
export var CallTypeEnum;
(function (CallTypeEnum) {
    CallTypeEnum["Call"] = "CALL";
})(CallTypeEnum || (CallTypeEnum = {}));
var Call = /** @class */ (function (_super) {
    __extends(Call, _super);
    function Call() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=accountId" }),
        __metadata("design:type", Number)
    ], Call.prototype, "accountId", void 0);
    __decorate([
        Metadata({ data: "json, name=answerTime" }),
        __metadata("design:type", Date)
    ], Call.prototype, "answerTime", void 0);
    __decorate([
        Metadata({ data: "json, name=callerId" }),
        __metadata("design:type", String)
    ], Call.prototype, "callerId", void 0);
    __decorate([
        Metadata({ data: "json, name=direction" }),
        __metadata("design:type", String)
    ], Call.prototype, "direction", void 0);
    __decorate([
        Metadata({ data: "json, name=duration" }),
        __metadata("design:type", Number)
    ], Call.prototype, "duration", void 0);
    __decorate([
        Metadata({ data: "json, name=endTime" }),
        __metadata("design:type", Date)
    ], Call.prototype, "endTime", void 0);
    __decorate([
        Metadata({ data: "json, name=externalId" }),
        __metadata("design:type", String)
    ], Call.prototype, "externalId", void 0);
    __decorate([
        Metadata({ data: "json, name=id" }),
        __metadata("design:type", Number)
    ], Call.prototype, "id", void 0);
    __decorate([
        Metadata({ data: "json, name=phoneNumber" }),
        __metadata("design:type", String)
    ], Call.prototype, "phoneNumber", void 0);
    __decorate([
        Metadata({ data: "json, name=startTime" }),
        __metadata("design:type", Date)
    ], Call.prototype, "startTime", void 0);
    __decorate([
        Metadata({ data: "json, name=state" }),
        __metadata("design:type", String)
    ], Call.prototype, "state", void 0);
    __decorate([
        Metadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], Call.prototype, "type", void 0);
    __decorate([
        Metadata({ data: "json, name=uciId" }),
        __metadata("design:type", Number)
    ], Call.prototype, "uciId", void 0);
    __decorate([
        Metadata({ data: "json, name=userId" }),
        __metadata("design:type", Number)
    ], Call.prototype, "userId", void 0);
    return Call;
}(SpeakeasyBase));
export { Call };
