<?php namespace Gdoo\Produce\Models;

use Gdoo\Index\Models\BaseModel;

class Plan extends BaseModel
{
    protected $table = 'produce_plan';

    public static $tabs = [
        'name'  => 'tab',
        'items' => [
            ['value' => 'plan.index', 'url' => 'produce/plan/index', 'name' => '生产计划单'],
        ]
    ];

    public static $bys = [
        'name'  => 'by',
        'items' => [
            ['value' => '', 'name' => '全部'],
            ['value' => 'divider'],
            ['value' => 'day', 'name' => '今日创建'],
            ['value' => 'week', 'name' => '本周创建'],
            ['value' => 'month', 'name' => '本月创建'],
        ]
    ];
}
