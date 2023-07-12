<script>
    import { Li, List } from 'flowbite-svelte';
    import Company from "../../components/Company.svelte";
</script>

<div class="block w-full h-full p-10">
    <div class="w-full max-w-5xl mx-auto p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700">
        <Company
                name="Future group"
                position="As as Full-stack developer"
                img="/icons/future-group.svg"
        />
        <List tag="ul" class="space-y-2">
            <Li>Website development and support</Li>
            <Li>Stack: laravel, node.js, js, html, css, bitrix, webpack</Li>
        </List>
    </div>
</div>
