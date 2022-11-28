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
var TaskrouterV1WorkspaceWorker = /** @class */ (function (_super) {
    __extends(TaskrouterV1WorkspaceWorker, _super);
    function TaskrouterV1WorkspaceWorker() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=account_sid" }),
        __metadata("design:type", String)
    ], TaskrouterV1WorkspaceWorker.prototype, "accountSid", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=activity_name" }),
        __metadata("design:type", String)
    ], TaskrouterV1WorkspaceWorker.prototype, "activityName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=activity_sid" }),
        __metadata("design:type", String)
    ], TaskrouterV1WorkspaceWorker.prototype, "activitySid", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=attributes" }),
        __metadata("design:type", String)
    ], TaskrouterV1WorkspaceWorker.prototype, "attributes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=available" }),
        __metadata("design:type", Boolean)
    ], TaskrouterV1WorkspaceWorker.prototype, "available", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=date_created" }),
        __metadata("design:type", Date)
    ], TaskrouterV1WorkspaceWorker.prototype, "dateCreated", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=date_status_changed" }),
        __metadata("design:type", Date)
    ], TaskrouterV1WorkspaceWorker.prototype, "dateStatusChanged", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=date_updated" }),
        __metadata("design:type", Date)
    ], TaskrouterV1WorkspaceWorker.prototype, "dateUpdated", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=friendly_name" }),
        __metadata("design:type", String)
    ], TaskrouterV1WorkspaceWorker.prototype, "friendlyName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=links" }),
        __metadata("design:type", Map)
    ], TaskrouterV1WorkspaceWorker.prototype, "links", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=sid" }),
        __metadata("design:type", String)
    ], TaskrouterV1WorkspaceWorker.prototype, "sid", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=url" }),
        __metadata("design:type", String)
    ], TaskrouterV1WorkspaceWorker.prototype, "url", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=workspace_sid" }),
        __metadata("design:type", String)
    ], TaskrouterV1WorkspaceWorker.prototype, "workspaceSid", void 0);
    return TaskrouterV1WorkspaceWorker;
}(SpeakeasyBase));
export { TaskrouterV1WorkspaceWorker };
