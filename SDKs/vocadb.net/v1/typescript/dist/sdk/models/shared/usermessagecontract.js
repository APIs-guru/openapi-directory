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
import { UserForApiContract } from "./userforapicontract";
export var UserMessageContractInboxEnum;
(function (UserMessageContractInboxEnum) {
    UserMessageContractInboxEnum["Nothing"] = "Nothing";
    UserMessageContractInboxEnum["Received"] = "Received";
    UserMessageContractInboxEnum["Sent"] = "Sent";
    UserMessageContractInboxEnum["Notifications"] = "Notifications";
})(UserMessageContractInboxEnum || (UserMessageContractInboxEnum = {}));
var UserMessageContract = /** @class */ (function (_super) {
    __extends(UserMessageContract, _super);
    function UserMessageContract() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=body" }),
        __metadata("design:type", String)
    ], UserMessageContract.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=createdFormatted" }),
        __metadata("design:type", String)
    ], UserMessageContract.prototype, "createdFormatted", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=highPriority" }),
        __metadata("design:type", Boolean)
    ], UserMessageContract.prototype, "highPriority", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", Number)
    ], UserMessageContract.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=inbox" }),
        __metadata("design:type", String)
    ], UserMessageContract.prototype, "inbox", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=read" }),
        __metadata("design:type", Boolean)
    ], UserMessageContract.prototype, "read", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=receiver" }),
        __metadata("design:type", UserForApiContract)
    ], UserMessageContract.prototype, "receiver", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=sender" }),
        __metadata("design:type", UserForApiContract)
    ], UserMessageContract.prototype, "sender", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=subject" }),
        __metadata("design:type", String)
    ], UserMessageContract.prototype, "subject", void 0);
    return UserMessageContract;
}(SpeakeasyBase));
export { UserMessageContract };
