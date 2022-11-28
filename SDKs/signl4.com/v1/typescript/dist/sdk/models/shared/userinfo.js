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
import { ContactAddressInfo } from "./contactaddressinfo";
import { UserDutyInfo } from "./userdutyinfo";
var UserInfo = /** @class */ (function (_super) {
    __extends(UserInfo, _super);
    function UserInfo() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=colorIndex" }),
        __metadata("design:type", Number)
    ], UserInfo.prototype, "colorIndex", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=contactAddresses", elemType: ContactAddressInfo }),
        __metadata("design:type", Array)
    ], UserInfo.prototype, "contactAddresses", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=dutyInfo" }),
        __metadata("design:type", UserDutyInfo)
    ], UserInfo.prototype, "dutyInfo", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], UserInfo.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=isDeactivated" }),
        __metadata("design:type", Boolean)
    ], UserInfo.prototype, "isDeactivated", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=isInvite" }),
        __metadata("design:type", Boolean)
    ], UserInfo.prototype, "isInvite", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=mail" }),
        __metadata("design:type", String)
    ], UserInfo.prototype, "mail", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], UserInfo.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=roleId" }),
        __metadata("design:type", String)
    ], UserInfo.prototype, "roleId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=subscriptionId" }),
        __metadata("design:type", String)
    ], UserInfo.prototype, "subscriptionId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=timeZone" }),
        __metadata("design:type", String)
    ], UserInfo.prototype, "timeZone", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=userImageLastModified" }),
        __metadata("design:type", Date)
    ], UserInfo.prototype, "userImageLastModified", void 0);
    return UserInfo;
}(SpeakeasyBase));
export { UserInfo };
