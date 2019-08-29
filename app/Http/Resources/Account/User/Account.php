<?php

namespace App\Http\Resources\Account\User;

use App\Helpers\DateHelper;
use Illuminate\Http\Resources\Json\Resource;

class Account extends Resource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request $request
     * @return array
     */
    public function toArray($request)
    {
        return [
            'id' => $this->id,
            'object' => 'account',
            'has_access_to_paid_version_for_free' => $this->has_access_to_paid_version_for_free,
            'stripe_id' => $this->stripe_id,
            'trial_ends_at' => $this->trial_ends_at,
            'legacy_free_plan_unlimited_contacts' => $this->legacy_free_plan_unlimited_contacts,
            'created_at' => DateHelper::getTimestamp($this->created_at),
            'updated_at' => DateHelper::getTimestamp($this->updated_at),
        ];
    }
}
