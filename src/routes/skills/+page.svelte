<script>
    import Skills from "../../components/Skills.svelte";

    const hardSkillsData = {
        labels: ['Angular', 'Javascript', 'NodeJs', 'Typescript', 'Css', 'C#', 'Java', 'Php', 'Gitlab CI'],
        datasets: [{
            label: null,
            data: [10, 9, 7, 10, 6, 4, 4, 7, 5],
        }],
    }

    const softSkillsData = {
        labels: ['Problem-solving', 'Communication', 'Time management', 'Emotional intelligence', 'Accountability', 'Self-learning', 'Self-awareness'],
        datasets: [{
            label: null,
            data: [9, 8, 7, 7, 8, 7, 6],
        }],
    }
</script>


<div class="grid grid-cols-1 lg:grid-cols-2 gap-6 p-6">
    <div class="border-gray-700 bg-gray-800 rounded-lg shadow p-6">
        <Skills title="Hard skills" data={hardSkillsData} />
    </div>

    <div class="border-gray-700 bg-gray-800 rounded-lg shadow p-6">
        <Skills title="Soft skills" data={softSkillsData} />
    </div>
</div>