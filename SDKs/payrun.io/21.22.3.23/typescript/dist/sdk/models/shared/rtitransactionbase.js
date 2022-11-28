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
// RtiTransactionBaseRtiTransactionBaseEmployerCore
/**
 * The rti transaction bases' employer core
**/
var RtiTransactionBaseRtiTransactionBaseEmployerCore = /** @class */ (function (_super) {
    __extends(RtiTransactionBaseRtiTransactionBaseEmployerCore, _super);
    function RtiTransactionBaseRtiTransactionBaseEmployerCore() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=@href" }),
        __metadata("design:type", String)
    ], RtiTransactionBaseRtiTransactionBaseEmployerCore.prototype, "atHref", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=@rel" }),
        __metadata("design:type", String)
    ], RtiTransactionBaseRtiTransactionBaseEmployerCore.prototype, "atRel", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=@title" }),
        __metadata("design:type", String)
    ], RtiTransactionBaseRtiTransactionBaseEmployerCore.prototype, "atTitle", void 0);
    return RtiTransactionBaseRtiTransactionBaseEmployerCore;
}(SpeakeasyBase));
export { RtiTransactionBaseRtiTransactionBaseEmployerCore };
export var RtiTransactionBaseRtiTransactionBaseTransactionStatusEnum;
(function (RtiTransactionBaseRtiTransactionBaseTransactionStatusEnum) {
    RtiTransactionBaseRtiTransactionBaseTransactionStatusEnum["New"] = "New";
    RtiTransactionBaseRtiTransactionBaseTransactionStatusEnum["RequestGenerated"] = "RequestGenerated";
    RtiTransactionBaseRtiTransactionBaseTransactionStatusEnum["CompletedWithError"] = "CompletedWithError";
    RtiTransactionBaseRtiTransactionBaseTransactionStatusEnum["CompletedWithSuccess"] = "CompletedWithSuccess";
    RtiTransactionBaseRtiTransactionBaseTransactionStatusEnum["TimeOut"] = "TimeOut";
})(RtiTransactionBaseRtiTransactionBaseTransactionStatusEnum || (RtiTransactionBaseRtiTransactionBaseTransactionStatusEnum = {}));
var RtiTransactionBaseRtiTransactionBase = /** @class */ (function (_super) {
    __extends(RtiTransactionBaseRtiTransactionBase, _super);
    function RtiTransactionBaseRtiTransactionBase() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=EmployerCore" }),
        __metadata("design:type", RtiTransactionBaseRtiTransactionBaseEmployerCore)
    ], RtiTransactionBaseRtiTransactionBase.prototype, "employerCore", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=RequestData" }),
        __metadata("design:type", String)
    ], RtiTransactionBaseRtiTransactionBase.prototype, "requestData", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ResponseData" }),
        __metadata("design:type", String)
    ], RtiTransactionBaseRtiTransactionBase.prototype, "responseData", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=RtiType" }),
        __metadata("design:type", String)
    ], RtiTransactionBaseRtiTransactionBase.prototype, "rtiType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=TaxYear" }),
        __metadata("design:type", Number)
    ], RtiTransactionBaseRtiTransactionBase.prototype, "taxYear", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Timestamp" }),
        __metadata("design:type", Date)
    ], RtiTransactionBaseRtiTransactionBase.prototype, "timestamp", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=TransactionStatus" }),
        __metadata("design:type", String)
    ], RtiTransactionBaseRtiTransactionBase.prototype, "transactionStatus", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=TransmissionDate" }),
        __metadata("design:type", Date)
    ], RtiTransactionBaseRtiTransactionBase.prototype, "transmissionDate", void 0);
    return RtiTransactionBaseRtiTransactionBase;
}(SpeakeasyBase));
export { RtiTransactionBaseRtiTransactionBase };
var RtiTransactionBase = /** @class */ (function (_super) {
    __extends(RtiTransactionBase, _super);
    function RtiTransactionBase() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=RtiTransactionBase" }),
        __metadata("design:type", RtiTransactionBaseRtiTransactionBase)
    ], RtiTransactionBase.prototype, "rtiTransactionBase", void 0);
    return RtiTransactionBase;
}(SpeakeasyBase));
export { RtiTransactionBase };
