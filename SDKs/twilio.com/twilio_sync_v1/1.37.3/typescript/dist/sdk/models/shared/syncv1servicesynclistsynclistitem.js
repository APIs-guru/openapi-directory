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
var SyncV1ServiceSyncListSyncListItem = /** @class */ (function (_super) {
    __extends(SyncV1ServiceSyncListSyncListItem, _super);
    function SyncV1ServiceSyncListSyncListItem() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=account_sid" }),
        __metadata("design:type", String)
    ], SyncV1ServiceSyncListSyncListItem.prototype, "accountSid", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=created_by" }),
        __metadata("design:type", String)
    ], SyncV1ServiceSyncListSyncListItem.prototype, "createdBy", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=data" }),
        __metadata("design:type", Object)
    ], SyncV1ServiceSyncListSyncListItem.prototype, "data", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=date_created" }),
        __metadata("design:type", Date)
    ], SyncV1ServiceSyncListSyncListItem.prototype, "dateCreated", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=date_expires" }),
        __metadata("design:type", Date)
    ], SyncV1ServiceSyncListSyncListItem.prototype, "dateExpires", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=date_updated" }),
        __metadata("design:type", Date)
    ], SyncV1ServiceSyncListSyncListItem.prototype, "dateUpdated", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=index" }),
        __metadata("design:type", Number)
    ], SyncV1ServiceSyncListSyncListItem.prototype, "index", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=list_sid" }),
        __metadata("design:type", String)
    ], SyncV1ServiceSyncListSyncListItem.prototype, "listSid", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=revision" }),
        __metadata("design:type", String)
    ], SyncV1ServiceSyncListSyncListItem.prototype, "revision", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=service_sid" }),
        __metadata("design:type", String)
    ], SyncV1ServiceSyncListSyncListItem.prototype, "serviceSid", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=url" }),
        __metadata("design:type", String)
    ], SyncV1ServiceSyncListSyncListItem.prototype, "url", void 0);
    return SyncV1ServiceSyncListSyncListItem;
}(SpeakeasyBase));
export { SyncV1ServiceSyncListSyncListItem };
